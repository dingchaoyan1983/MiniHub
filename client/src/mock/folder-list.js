import generator from './generator';
import {projectList} from './projects';
import { DELAY } from '../constants';

export default function() {
    this.get('/api/projects/:projectId/folders', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.projectId);
        const folders = generator.folderList();

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: folders})
        ];
    }, DELAY);

    this.get('/api/projects/:projectId/folders/:folderId', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.id);
        const folders = generator.folderList();

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: folders})
        ];
    }, DELAY);

    this.get('/api/projects/:projectId/folders/:folderId/files/:fileId', function(req, res) {
        const {extname = '.js'} = req.queryParams;
        const project = projectList.filter((project) => project.id === req.params.id);
        const content = generator.fileContent(extname.toLowerCase());

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: {code: content , extname}})
        ];
    }, DELAY);

    this.get('/api/file/history', function(req) {
         const {extname = '.js'} = req.queryParams;
         const content = generator.fileHistory(extname.toLowerCase());

         return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: {code: content , extname}})
        ];
    })

    this.put('/api/projects/:projectId/folders/:folderId/files/:fileId', function(req, res) {
        const {extname, code} = req.requestBody;

        try {
            generator.modifyCode({
                extname, 
                code
            });
        } catch(e) {
            return [
                400,
                {'content-type': 'application/json'},
                JSON.stringify({data: e})
            ];
        }

        const statusCodes = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200];
        const randomIndex = parseInt(Math.random() * statusCodes.length);

        return [
            statusCodes[randomIndex],
            {'content-type': 'application/json'},
            JSON.stringify({data: {code, extname}})
        ];
    }, DELAY);
}

