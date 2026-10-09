# Engine: Soomi

Author: Otto Laukkanen

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 1864 | 2130 | 2232 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0B | 2026-04-24 | 2047 | 2392 | 2336 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-09 14:16:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0", "1.2.0B"]
  y-axis "Elo Rating" 1800 --> 2500
  line "" [1800, 1851, 1840, 2037, 2033]
  line "STC (8.0+0.08s)" [1800, 1851, 1840, 2037, 2033]
  line "LTC (60.0+0.60s)" [2153, 2107, 2152, 2322, 2245]
  line "" [2165, 2159, 2199, 2434, 2388]
  line "VLTC (2m24s+1.12s)" [2165, 2159, 2199, 2434, 2388]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 28 | 448 | 51% | 2379 | 26% |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2336 | 56 | 124 | 56% | 2230 | 19% |
| 1.2.0B | VLTC <sub>(2m24s+1.12s)</sub> | 2232 | 47 | 166 | 53% | 2195 | 21% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2245 | 28 | 468 | 49% | 2249 | 22% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2392 | 52 | 124 | 52% | 2375 | 28% |
| 1.2.0B | LTC <sub>(60.0+0.60s)</sub> | 2130 | 43 | 204 | 51% | 2128 | 21% |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2047 | 48 | 152 | 47% | 2078 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 1864 | 38 | 230 | 46% | 1905 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0B | STC <sub>(8.0+0.08s)</sub> | 2033 | 26 | 524 | 50% | 2021 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2434 | 26 | 516 | 54% | 2400 | 23% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 27 | 460 | 50% | 2325 | 26% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 2037 | 26 | 502 | 50% | 2037 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.8 | VLTC <sub>(2m24s+1.12s)</sub> | 2199 | 45 | 180 | 47% | 2229 | 19% |
| 1.1.8 | LTC <sub>(60.0+0.60s)</sub> | 2152 | 42 | 192 | 50% | 2152 | 28% |
| 1.1.8 | STC <sub>(8.0+0.08s)</sub> | 1840 | 47 | 164 | 48% | 1860 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2159 | 46 | 160 | 52% | 2147 | 28% |
| 1.1.7 | LTC <sub>(60.0+0.60s)</sub> | 2107 | 46 | 160 | 53% | 2079 | 26% |
| 1.1.7 | STC <sub>(8.0+0.08s)</sub> | 1851 | 50 | 140 | 55% | 1797 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 2165 | 50 | 152 | 43% | 2252 | 18% |
| 1.1.6 | LTC <sub>(60.0+0.60s)</sub> | 2153 | 46 | 168 | 46% | 2195 | 24% |
| 1.1.6 | STC <sub>(8.0+0.08s)</sub> | 1800 | 60 | 104 | 48% | 1832 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |