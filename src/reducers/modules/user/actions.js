/**
 * Default Action Prototype
 *
 * type Action = {
 *     type:       string;
 *     payload?:   any;
 *     meta?:      any;
 *     error?:     boolean;
 * };
 */

export const loginRequest = ({ username, password }) => ({
    type: 'LOGIN_REQUEST',
    payload: { username, password }
})
