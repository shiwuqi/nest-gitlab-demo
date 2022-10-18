import { Injectable } from '@nestjs/common';
import { Gitlab } from '@gitbeaker/node';

const GITLAB_HOST = '';
const GITLAB_TOKEN = '';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const gitlab = new Gitlab({
      host: GITLAB_HOST,
      token: GITLAB_TOKEN,
    });
    const projects = await gitlab.Projects.all();
    // const branchs = await gitlab.Tags.all(346);
    // const res = await gitlab.Branches.create(313, 'test1', 'test');
    // const res = await gitlab.Branches.remove(313, 'test1');
    // const res = await gitlab.Users.all();
    // const res = await gitlab.MergeRequests.create(313, 'test1', 'test', '合并分支', {
    //   assigneeId: 26,
    //   allow_collaboration: true,
    // });
    return projects;
  }
}