import generator from './generator';
import { DELAY } from '../constants';

export const projectList = generator.projectList();

export default function() {
    this.get('/api/projects', function(req, res) {
        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: projectList})
        ];
    }, DELAY);

    this.get('/api/projects/:id', function(req, res) {
        const project = projectList.filter((project) => project.id === req.params.id);

        return [
            200,
            {'content-type': 'application/json'},
            JSON.stringify({data: project})
        ]
    }, DELAY);
}
