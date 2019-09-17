import { Collapse, Icon } from 'antd';
import React from 'react';



const Panel = Collapse.Panel;

const text1 = `
Créée en 1998 par Greg Manset, Categorynetcom avait pour but de regrouper des journalistes free-lance sous une même enseigne. L'équipe de journalistes fournissait des articles et des reportages à de nombreux médias francophones et anglo-saxons. Avec l'arrivée de 'Internet, Categorynetcom a proposé du contenu d'actualités pour des sites Internet Lors de l'effondrement de la bulle Internet Categorynetcom a restructuré son activité et a reposibonné son activité professionnelle. Désormais, Categorynetcom édite uniquement le réseau de sites Categorynetcom.
`;

const text2 = `
Le réseau Categorynetcom se compose de multiples portails destinés aux professionnels de la communication et de la presse. On y retrouve entre autres httpliwww.Categorynetcom httml/www.Categorynetbe http://www.planete-rp.com,. L'objectif est de réunir l'ensemble des professionnels de la presse, des relations presse et de la communication. 
`;

const text3 = `
Le site Categorynetcom propose une série de services pour les journalistes, pigistes, attachés de presse. L'ambition est que Categorynetcom soit LA page de démarrage des pros de la presse et de la corn'. Les utilisateurs peuvent notamment : poster un CV, participer à des débats dans les forums, consulter des revues de presse d'emploi dans l'univers de la presse et des RP, garder le contact avec l'adualité du secteur gràce à des newsletters d'information diffusées au quotidien, etc.
`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

const Us = (props) => {
    return (
        <Collapse
            bordered={false}
            defaultActiveKey={['1']}
            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
            <Panel header="Historique" key="1" style={customPanelStyle}>
                <p>{text1}</p>
            </Panel>
            <Panel header="Objectifs" key="2" style={customPanelStyle}>
                <p>{text2}</p>
            </Panel>
            <Panel header="Services" key="3" style={customPanelStyle}>
                <p>{text3}</p>
            </Panel>
        </Collapse>
    );
}

export default Us;