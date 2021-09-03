class Github {
    constructor() {
        this.client_id = '0044f06153352cb917bf'
        this.client_secret = '0c04739d639183e79179cb737ad7667b44dc042d'
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.respos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }
        
 