export let executeClient = (eventName, ...args) => 
{
	if (window.mp === undefined) return;
	
    window.mp.trigger(eventName, ...args);
}