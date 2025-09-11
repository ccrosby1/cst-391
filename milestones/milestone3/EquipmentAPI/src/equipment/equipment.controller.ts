import { Request, RequestHandler, Response } from 'express';
import { Equipment } from './equipment.model';
import * as EquipmentDao from './equipment.dao';
import { OkPacket } from 'mysql';

export const readEquipment: RequestHandler = async (req: Request, res: Response) => {
    try {
        let equipment;
        let equipmentId = parseInt(req.query.equipmentId as string);

        console.log('equipmentId', equipmentId);
        if (Number.isNaN(equipmentId)) {
            equipment = await EquipmentDao.readEquipment();
        } else {
            equipment = await EquipmentDao.readEquipmentByEquipmentId(equipmentId);
        }
        res.status(200).json(
            equipment
        );
    } catch (error) {
        console.error('[equipment.controller][readEquipment][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching equipment'
        });
    }
};

export const createEquipment: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await EquipmentDao.createEquipment(req.body);

        console.log('req.body', req.body);
        console.log('equipment', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[equipment.controller][createEquipment][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing equipment'
        });
    }
};

export const updateEquipment: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(typeof req.body.equipmentId, req.body.equipmentId);

        const okPacket: OkPacket = await EquipmentDao.updateEquipment(req.body);

        console.log('req.body', req.body);
        console.log('equipment', okPacket);

        
        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[equipment.controller][updateEquipment][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing equipment'
        });
    }
};

export const deleteEquipment: RequestHandler = async (req: Request, res: Response) => {
    try {
        let equipmentId = parseInt(req.params.equipmentId as string);
        console.log('equipmentId', equipmentId);

        if (!Number.isNaN(equipmentId)) {
            const response = await EquipmentDao.deleteEquipment(equipmentId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for equipmentId");
        }

    } catch (error) {
        console.error('[equipment.controller][deleteEquipment][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting equipment'
        });
    }
};
