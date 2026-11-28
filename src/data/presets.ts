import type { GradientPreset } from 'types/gradient';
import { Shape, GradientType } from 'types/gradient';

export const presets: GradientPreset[] = [
    {
        id: 'electric-blue',
        name: 'Electric Blue',
        layers: [
            {
                id: 'light-layer',
                type: GradientType.RADIAL,
                enabled: true,
                shape: Shape.CIRCLE,
                position: { x: 50, y: 15 },
                stops: [
                    { id: 'li-1', color: '#ffffffb3', position: 0, opacity: 1 },
                    { id: 'li-2', color: '#ffffff00', position: 45, opacity: 1 },
                ],
            },
            {
                id: 'electric-blue-layer',
                type: GradientType.LINEAR,
                enabled: true,
                angle: 180,
                stops: [
                    { id: 'eb-1', color: '#365bda', position: 0, opacity: 1 },
                    { id: 'eb-2', color: '#0c1a61', position: 100, opacity: 1 },
                ],
            },
        ],
    },
    {
        id: 'sunset',
        name: 'Sunset',
        layers: [
            {
                id: 'sunset-layer',
                type: GradientType.LINEAR,
                enabled: true,
                angle: 135,
                stops: [
                    { id: 'sun-1', color: '#ffb46d', position: 0, opacity: 1 },
                    { id: 'sun-2', color: '#e94890', position: 55, opacity: 1 },
                    { id: 'sun-3', color: '#441478', position: 100, opacity: 1 },
                ],
            },
        ],
    },
    {
        id: 'aurora',
        name: 'Aurora',
        layers: [
            {
                id: 'aurora-layer',
                type: GradientType.RADIAL,
                enabled: true,
                shape: Shape.ELLIPSE,
                position: { x: 50, y: 0 },
                stops: [
                    { id: 'aur-1', color: '#83f7d2', position: 0, opacity: 1 },
                    { id: 'aur-2', color: '#159f99', position: 50, opacity: 1 },
                    { id: 'aur-3', color: '#11245d', position: 100, opacity: 1 },
                ],
            },
        ],
    },
    {
        id: 'rose',
        name: 'Rose',
        layers: [
            {
                id: 'rose-layer',
                type: GradientType.LINEAR,
                enabled: true,
                angle: 145,
                stops: [
                    { id: 'rose-1', color: '#f8a9cc', position: 0, opacity: 1 },
                    { id: 'rose-2', color: '#a74692', position: 50, opacity: 1 },
                    { id: 'rose-3', color: '#36164d', position: 100, opacity: 1 },
                ],
            },
        ],
    },
    {
        id: 'conic-burst',
        name: 'Conic Burst',
        layers: [
            {
                id: 'conic-layer',
                type: GradientType.CONIC,
                enabled: true,
                angle: 140,
                position: { x: 50, y: 50 },
                stops: [
                    { id: 'conic-1', color: '#5368ff', position: 0, opacity: 1 },
                    { id: 'conic-2', color: '#e45ca9', position: 33, opacity: 1 },
                    { id: 'conic-3', color: '#ff9a3c', position: 66, opacity: 1 },
                    { id: 'conic-4', color: '#5368ff', position: 100, opacity: 1 },
                ],
            },
        ],
    },
    {
        id: 'deep-ocean',
        name: 'Deep Ocean',
        layers: [
            {
                id: 'ocean-layer',
                type: GradientType.LINEAR,
                enabled: true,
                angle: 145,
                stops: [
                    { id: 'ocean-1', color: '#06b6d4', position: 0, opacity: 1 },
                    { id: 'ocean-2', color: '#0b265d', position: 100, opacity: 1 },
                ],
            },
        ],
    },
];
