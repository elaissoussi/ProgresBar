## Custom Widget for [Wakanda](http://wakanda.org)
The __ProgressBar__ widget allows you to creating a nice looking  ProgressBar.  

### Properties
This widget has the following properties:

* __Value__:  The value that will be diplayed for __ProgressBar__. 
* __Max__:  the maximum value that will be displayed for the P__ProgressBar__
* __HideIfInactive__:  (Boolean) keeps the Progress Bar hidden until it is active.
* __Label__ : the label  of the __ProgressBar__
  


### Api
*__start__ -> activate the progressbar
*__stop__ -> deactivate the progresbar

###Events
*__stop__ -> when stop api is called, or when value == max
*__start__ -> when start method is called or when value is > 0 and the state was stopped


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
