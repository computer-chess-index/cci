# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 1980<sub>(-864) | 2246<sub>(-77) | 2361<sub>(-96) |  |
| 1.2.0 | 2025-12-31 | 2844 | 2323 | 2457 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2001<sub>(-908) | 2365<sub>(+new) | 2349<sub>(-174) |  |
| 1.2.0 | 2025-12-31 | 2909 |  | 2523 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2033<sub>(-4) | 2245<sub>(-77) | 2388<sub>(-46) |  |
| 1.2.0 | 2025-12-31 | 2037<sub>(+197) | 2322<sub>(+170) | 2434<sub>(+235) |  |
| 1.1.8 | 2025-12-16 | 1840<sub>(-11) | 2152<sub>(+45) | 2199<sub>(+40) |  |
| 1.1.7 | 2025-12-07 | 1851<sub>(+51) | 2107<sub>(-46) | 2159<sub>(-6) |  |
| 1.1.6 | 2025-11-30 | 1800 | 2153 | 2165 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Soomi+<version>&body=###%20Engine%20name%0ASoomi%0A%0A###%20Version%0A1.2.0B" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-12 05:42:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1900 --> 2900
  line "E1: STC (8.0+0.08s)" [2844, 1980]
  line "E1: LTC (60.0+0.60s)" [2323, 2246]
  line "E1: VLTC (2m24s+1.12s)" [2457, 2361]
  line "P1: STC (8.0+0.08s)" [2001]
  line "P1: LTC (60.0+0.60s)" [2365]
  line "P1: VLTC (2m24s+1.12s)" [2349]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "T1: STC (8.0+0.08s)" [1800, 1851, 1840, 2037, 2033]
  line "T1: LTC (60.0+0.60s)" [2153, 2107, 2152, 2322, 2245]
  line "T1: VLTC (2m24s+1.12s)" [2165, 2159, 2199, 2434, 2388]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2349 | 40 | 232 | 56% | 2252 | 22% |
|  |  | E1 | 2361 | 33 | 340 | 53% | 2313 | 24% |
|  |  | T1 | 2388 | 28 | 448 | 51% | 2379 | 26% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2246 | 34 | 340 | 50% | 2256 | 19% |
|  |  | T1 | 2245 | 28 | 468 | 49% | 2249 | 22% |
|  |  | P1 | 2365 | 39 | 216 | 50% | 2367 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1980 | 33 | 318 | 48% | 2002 | 25% |
|  |  | T1 | 2033 | 26 | 524 | 50% | 2021 | 24% |
|  |  | P1 | 2001 | 40 | 216 | 46% | 2053 | 23% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2434 | 26 | 516 | 54% | 2400 | 23% |
|  |  | P1 | 2523 | 294 | 4 | 0% | 2889 | 0% |
|  |  | E1 | 2457 | 294 | 4 | 0% | 2824 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2322 | 27 | 460 | 50% | 2325 | 26% |
|  |  | E1 | 2323 | 225 | 8 | 0% | 2728 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2037 | 26 | 502 | 50% | 2037 | 23% |
|  |  | P1 | 2909 | 211 | 4 | 75% | 2789 | 50% |
|  |  | E1 | 2844 | 211 | 4 | 75% | 2724 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2199 | 45 | 180 | 47% | 2229 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2152 | 42 | 192 | 50% | 2152 | 28% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1840 | 47 | 164 | 48% | 1860 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2159 | 46 | 160 | 52% | 2147 | 28% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2107 | 46 | 160 | 53% | 2079 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1851 | 50 | 140 | 55% | 1797 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2165 | 50 | 152 | 43% | 2252 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2153 | 46 | 168 | 46% | 2195 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1800 | 60 | 104 | 48% | 1832 | 18% |