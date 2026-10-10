# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2514 | 2834 | 2869 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2773 | 3033 | 3112 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-09-08 | 2674<sub>(+383) | 2871<sub>(+305) | 2938<sub>(+283) |  |
| 1.4.1 | 2026-04-26 | 2291<sub>(+23) | 2566<sub>(+67) | 2655<sub>(+63) |  |
| 1.4.0 | 2026-04-01 | 2268<sub>(+213) | 2499<sub>(+132) | 2592<sub>(+200) |  |
| 1.3.2 | 2026-03-14 | 2055<sub>(+30) | 2367<sub>(+26) | 2392<sub>(+4) |  |
| 1.3.1 | 2026-03-10 | 2025<sub>(+154) | 2341<sub>(+112) | 2388<sub>(+133) |  |
| 1.3.0 | 2026-03-08 | 1871<sub>(+183) | 2229<sub>(+311) | 2255<sub>(+239) |  |
| 1.2.1 | 2026-03-07 | 1688 | 1918 | 2016 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-10-10 04:36:57

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1", "2.0.0"]
  y-axis "Elo Rating" 1600 --> 3000
  line "" [1688, 1871, 2025, 2055, 2268, 2291, 2674]
  line "STC (8.0+0.08s)" [1688, 1871, 2025, 2055, 2268, 2291, 2674]
  line "LTC (60.0+0.60s)" [1918, 2229, 2341, 2367, 2499, 2566, 2871]
  line "" [2016, 2255, 2388, 2392, 2592, 2655, 2938]
  line "VLTC (2m24s+1.12s)" [2016, 2255, 2388, 2392, 2592, 2655, 2938]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 39 | 186 | 49% | 3124 | 49% |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2869 | 34 | 256 | 48% | 2882 | 42% |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2938 | 34 | 256 | 48% | 2950 | 43% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2834 | 35 | 238 | 50% | 2835 | 46% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2871 | 29 | 352 | 48% | 2890 | 43% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3033 | 42 | 174 | 50% | 3042 | 41% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2514 | 35 | 266 | 44% | 2573 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2674 | 35 | 258 | 51% | 2661 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2773 | 43 | 172 | 49% | 2774 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2655 | 25 | 498 | 52% | 2638 | 34% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2566 | 25 | 514 | 49% | 2573 | 33% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2291 | 26 | 488 | 48% | 2314 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2592 | 30 | 360 | 50% | 2589 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2499 | 32 | 320 | 49% | 2504 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2268 | 31 | 360 | 52% | 2250 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2392 | 34 | 296 | 49% | 2402 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2367 | 32 | 312 | 51% | 2361 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2055 | 32 | 320 | 48% | 2072 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2388 | 37 | 244 | 51% | 2375 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2341 | 37 | 240 | 51% | 2333 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2025 | 40 | 212 | 52% | 2010 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2255 | 44 | 188 | 54% | 2219 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2229 | 41 | 204 | 55% | 2186 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1871 | 42 | 196 | 50% | 1871 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2016 | 39 | 254 | 50% | 2025 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1918 | 45 | 192 | 46% | 1989 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1688 | 44 | 200 | 47% | 1760 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |