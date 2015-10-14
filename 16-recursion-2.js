
// TODO: compare this with the official solution
function getDependencies(tree) {

    function getItemDependencies(item, acc) {
        // end condition
        if (!item || !item.dependencies) return acc;

        return Object.keys(item.dependencies).reduce(function (acc, key) {

            // perform action
            var id = key + '@' + item.dependencies[key].version;
            if (acc.indexOf(id) === -1) {
                acc.push(id);
            }

            // recursive step
            return getItemDependencies(item.dependencies[key], acc);
        }, acc);
    }

    return getItemDependencies(tree, []).sort();
}

module.exports = getDependencies;

/*

 // official solution
 function getDependencies(mod, result) {
 result = result || []
 var dependencies = mod && mod.dependencies || []
 Object.keys(dependencies).forEach(function(dep) {
 var key = dep + '@' + mod.dependencies[dep].version
 if (result.indexOf(key) === -1) result.push(key)
 getDependencies(mod.dependencies[dep], result)
 })
 return result.sort()
 }

 module.exports = getDependencies

* */