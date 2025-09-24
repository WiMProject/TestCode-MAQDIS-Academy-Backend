const readline = require('readline');

class WerewolfGame {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.player = {
      nama: '',
      peran: '',
      hp: 100,
      alive: true
    };
    
    this.gameState = {
      day: 1,
      phase: 'setup',
      npcs: [
        { nama: 'Alice', peran: 'villager', alive: true },
        { nama: 'Bob', peran: 'werewolf', alive: true },
        { nama: 'Charlie', peran: 'villager', alive: true }
      ]
    };
    
    this.roles = {
      penyihir: {
        description: 'kamu dapat melihat siapa yang menjadi werewolf!',
        ability: 'Lihat identitas pemain lain'
      },
      guard: {
        description: 'kamu akan membantu melindungi temanmu dari serangan werewolf.',
        ability: 'Lindungi pemain dari serangan'
      },
      werewolf: {
        description: 'Kamu akan memakan mangsa setiap malam!',
        ability: 'Serang pemain lain di malam hari'
      }
    };
  }

  validateInput(nama, peran) {
    if (!nama.trim()) {
      return { isValid: false, message: "Nama harus diisi!" };
    }
    
    if (!peran.trim()) {
      return { isValid: false, message: `Halo ${nama}, Pilih peranmu untuk memulai game!` };
    }
    
    // Normalize input - case insensitive dan trim whitespace
    const normalizedRole = peran.toLowerCase().trim();
    
    // Cek berbagai variasi input
    const roleAliases = {
      'penyihir': 'penyihir',
      'witch': 'penyihir',
      'seer': 'penyihir',
      'guard': 'guard',
      'guardian': 'guard',
      'protector': 'guard',
      'werewolf': 'werewolf',
      'wolf': 'werewolf',
      'ww': 'werewolf'
    };
    
    const finalRole = roleAliases[normalizedRole] || normalizedRole;
    
    if (!this.roles[finalRole]) {
      return { 
        isValid: false, 
        message: "Peran tidak valid! Pilih antara: Penyihir, Guard, atau Werewolf\n(Case insensitive - bisa pakai huruf kecil/besar)" 
      };
    }
    
    const welcomeMsg = `Selamat datang di Dunia Werewolf, ${nama}`;
    const roleMsg = `Halo ${this.capitalizeFirst(finalRole)} ${nama}, ${this.roles[finalRole].description}`;
    
    return { 
      isValid: true, 
      message: `${welcomeMsg}\n${roleMsg}`,
      role: finalRole
    };
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  showMenu() {
    if (this.gameState.phase === 'setup') {
      this.showSetupMenu();
    } else if (this.gameState.phase === 'day') {
      this.showDayMenu();
    } else if (this.gameState.phase === 'night') {
      this.showNightMenu();
    }
  }

  showSetupMenu() {
    console.log("\n" + "=".repeat(30));
    console.log("WEREWOLF GAME MENU");
    console.log("=".repeat(30));
    console.log("1. Mulai Game");
    console.log("2. Ganti Peran");
    console.log("3. Ganti Nama");
    console.log("4. Lihat Status");
    console.log("5. Keluar");
    console.log("=".repeat(30));
    
    this.rl.question('Pilih menu (1-5): ', (choice) => {
      this.handleSetupChoice(choice.trim());
    });
  }

  showDayMenu() {
    console.log(`\nHARI ${this.gameState.day} - FASE SIANG`);
    console.log("=".repeat(30));
    console.log("1. Vote untuk eliminasi");
    console.log("2. Gunakan kemampuan");
    console.log("3. Lihat pemain hidup");
    console.log("4. Status game");
    console.log("=".repeat(30));
    
    this.rl.question('Pilih aksi (1-4): ', (choice) => {
      this.handleDayChoice(choice.trim());
    });
  }

  showNightMenu() {
    console.log(`\nHARI ${this.gameState.day} - FASE MALAM`);
    console.log("=".repeat(30));
    
    if (this.player.peran === 'werewolf') {
      console.log("1. Serang pemain");
      console.log("2. Lihat pemain hidup");
    } else if (this.player.peran === 'guard') {
      console.log("1. Lindungi pemain");
      console.log("2. Lihat pemain hidup");
    } else {
      console.log("1. Tidur (skip turn)");
      console.log("2. Lihat pemain hidup");
    }
    console.log("=".repeat(30));
    
    this.rl.question('Pilih aksi: ', (choice) => {
      this.handleNightChoice(choice.trim());
    });
  }

  handleSetupChoice(choice) {
    const actions = {
      '1': () => this.startGame(),
      '2': () => this.askRole(),
      '3': () => this.askName(),
      '4': () => this.showStatus(),
      '5': () => this.exitGame()
    };

    if (actions[choice]) {
      actions[choice]();
    } else {
      console.log("Pilihan tidak valid!");
      this.showSetupMenu();
    }
  }

  handleDayChoice(choice) {
    switch(choice) {
      case '1':
        this.voteElimination();
        break;
      case '2':
        this.useAbility();
        break;
      case '3':
        this.showAlivePlayers();
        break;
      case '4':
        this.showGameStatus();
        break;
      default:
        console.log("Pilihan tidak valid!");
        this.showDayMenu();
    }
  }

  handleNightChoice(choice) {
    switch(choice) {
      case '1':
        if (this.player.peran === 'werewolf') {
          this.attackPlayer();
        } else if (this.player.peran === 'guard') {
          this.protectPlayer();
        } else {
          this.sleep();
        }
        break;
      case '2':
        this.showAlivePlayers();
        break;
      default:
        console.log("Pilihan tidak valid!");
        this.showNightMenu();
    }
  }

  startGame() {
    if (!this.player.peran) {
      console.log("Pilih peran dulu!");
      this.askRole();
      return;
    }
    
    console.log(`\nGame dimulai!`);
    console.log(`${this.player.nama} sebagai ${this.capitalizeFirst(this.player.peran)}`);
    console.log(`Kemampuan: ${this.roles[this.player.peran].ability}`);
    
    this.gameState.phase = 'day';
    this.showDayMenu();
  }

  voteElimination() {
    this.showAlivePlayers();
    this.rl.question('Pilih nomor pemain untuk dieliminasi: ', (choice) => {
      const playerIndex = parseInt(choice) - 1;
      const alivePlayers = this.gameState.npcs.filter(p => p.alive);
      
      if (playerIndex >= 0 && playerIndex < alivePlayers.length) {
        const target = alivePlayers[playerIndex];
        target.alive = false;
        console.log(`${target.nama} telah dieliminasi!`);
        
        if (target.peran === 'werewolf') {
          console.log(`Selamat! ${target.nama} adalah werewolf!`);
        }
        
        this.checkWinCondition();
      } else {
        console.log("Pilihan tidak valid!");
        this.showDayMenu();
      }
    });
  }

  useAbility() {
    if (this.player.peran === 'penyihir') {
      this.showAlivePlayers();
      this.rl.question('Pilih nomor pemain untuk dilihat identitasnya: ', (choice) => {
        const playerIndex = parseInt(choice) - 1;
        const alivePlayers = this.gameState.npcs.filter(p => p.alive);
        
        if (playerIndex >= 0 && playerIndex < alivePlayers.length) {
          const target = alivePlayers[playerIndex];
          console.log(`${target.nama} adalah ${target.peran}!`);
        }
        this.showDayMenu();
      });
    } else {
      console.log("Kemampuan hanya bisa digunakan sesuai peran!");
      this.showDayMenu();
    }
  }

  attackPlayer() {
    this.showAlivePlayers();
    this.rl.question('Pilih nomor pemain untuk diserang: ', (choice) => {
      const playerIndex = parseInt(choice) - 1;
      const alivePlayers = this.gameState.npcs.filter(p => p.alive);
      
      if (playerIndex >= 0 && playerIndex < alivePlayers.length) {
        const target = alivePlayers[playerIndex];
        target.alive = false;
        console.log(`Kamu menyerang ${target.nama}!`);
        this.nextDay();
      } else {
        console.log("Pilihan tidak valid!");
        this.showNightMenu();
      }
    });
  }

  protectPlayer() {
    this.showAlivePlayers();
    this.rl.question('Pilih nomor pemain untuk dilindungi: ', (choice) => {
      console.log(`Kamu melindungi pemain tersebut!`);
      this.nextDay();
    });
  }

  sleep() {
    console.log("Kamu tidur dan menunggu pagi...");
    this.nextDay();
  }

  nextDay() {
    this.gameState.day++;
    this.gameState.phase = 'day';
    console.log(`\nHari ${this.gameState.day} telah tiba!`);
    this.checkWinCondition();
  }

  showAlivePlayers() {
    console.log("\nPEMAIN HIDUP:");
    const alivePlayers = this.gameState.npcs.filter(p => p.alive);
    alivePlayers.forEach((player, index) => {
      console.log(`${index + 1}. ${player.nama}`);
    });
    console.log("");
  }

  showGameStatus() {
    console.log(`\nSTATUS GAME - Hari ${this.gameState.day}`);
    console.log(`${this.player.nama} (${this.capitalizeFirst(this.player.peran)})`);
    console.log(`HP: ${this.player.hp}`);
    this.showAlivePlayers();
    this.showMenu();
  }

  checkWinCondition() {
    const aliveWerewolves = this.gameState.npcs.filter(p => p.alive && p.peran === 'werewolf').length;
    const aliveVillagers = this.gameState.npcs.filter(p => p.alive && p.peran === 'villager').length;
    
    if (aliveWerewolves === 0) {
      console.log("VILLAGERS MENANG! Semua werewolf telah dieliminasi!");
      this.exitGame();
    } else if (aliveVillagers <= aliveWerewolves) {
      console.log("WEREWOLVES MENANG! Mereka menguasai desa!");
      this.exitGame();
    } else {
      this.showMenu();
    }
  }

  showStatus() {
    console.log("\nSTATUS PEMAIN");
    console.log(`Nama: ${this.player.nama || 'Belum diisi'}`);
    console.log(`Peran: ${this.player.peran ? this.capitalizeFirst(this.player.peran) : 'Belum dipilih'}`);
    console.log(`HP: ${this.player.hp}`);
    this.showSetupMenu();
  }

  askName() {
    this.rl.question('Masukkan nama (default: John): ', (input) => {
      const nama = input.trim() || "John";
      this.player.nama = nama;
      console.log(`Nama berhasil diset: ${nama}`);
      
      if (!this.player.peran) {
        this.askRole();
      } else {
        this.showSetupMenu();
      }
    });
  }

  askRole() {
    const roleOptions = Object.keys(this.roles).map(role => this.capitalizeFirst(role)).join('/');
    console.log(`\nContoh input yang diterima:`);
    console.log(`- penyihir, Penyihir, PENYIHIR`);
    console.log(`- guard, Guard, GUARD`);
    console.log(`- werewolf, Werewolf, WEREWOLF`);
    
    this.rl.question(`\nMasukkan peran (${roleOptions}): `, (input) => {
      const result = this.validateInput(this.player.nama, input);
      console.log(result.message);
      
      if (!result.isValid) {
        console.log("Coba lagi!\n");
        if (result.message.includes("Nama harus diisi")) {
          this.askName();
        } else {
          this.askRole();
        }
      } else {
        this.player.peran = result.role || input.trim().toLowerCase();
        console.log(`Peran berhasil dipilih: ${this.capitalizeFirst(this.player.peran)}`);
        this.showSetupMenu();
      }
    });
  }

  exitGame() {
    console.log("\nTerima kasih telah bermain!");
    this.rl.close();
  }

  start() {
    console.log("WEREWOLF GAME");
    console.log("Selamat datang di dunia Werewolf!");
    this.askName();
  }
}

const game = new WerewolfGame();
game.start();