import http from '@/http-common';

class GitUserService {
    getAll(): Promise<any> {
        return http.get("/users");
    }
    getDetail(userLogin: string): Promise<any> {
        return http.get("/users/" + userLogin);
    }
    getUserRepo(userLogin: string): Promise<any> {
        return http.get("/users/" + userLogin + "/repos");
    }
}

export default new GitUserService();