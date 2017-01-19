import Pretender from 'pretender';
import folderListRoutes from './folder-list';
import projectsRoutes from './projects';

const server  = new Pretender();

//mock server routes mapping start ... 
server.map(folderListRoutes);
server.map(projectsRoutes);
//mock server routes mapping end ... 

export default server;
