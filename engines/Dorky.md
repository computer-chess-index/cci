# Engine: Dorky

Author: Matt KcKnight

Home: https://github.com/matt-dot-net/dorky-release

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2310<sub>(+34) | 2757<sub>(+58) | 2915<sub>(+84) |  |
| 5.1 | 2026-08-21 | 2276 | 2699 | 2831 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.2 | 2026-10-23 | 2357<sub>(-4) | 2877<sub>(+115) | 2915<sub>(+91) |  |
| 5.1 | 2026-08-21 | 2361 | 2762 | 2824 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-08-21 | 2314<sub>(+70) | 2651<sub>(+137) | 2747<sub>(+100) |  |
| 5.0 | 2026-08-08 | 2244 | 2514 | 2647 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dorky+<version>&body=###%20Engine%20name%0ADorky%0A%0A###%20Version%0A5.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-01 05:37:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.1", "5.2"]
  y-axis "Elo Rating" 2200 --> 3000
  line "E1: STC (8.0+0.08s)" [2276, 2310]
  line "E1: LTC (60.0+0.60s)" [2699, 2757]
  line "E1: VLTC (2m24s+1.12s)" [2831, 2915]
  line "P1: STC (8.0+0.08s)" [2361, 2357]
  line "P1: LTC (60.0+0.60s)" [2762, 2877]
  line "P1: VLTC (2m24s+1.12s)" [2824, 2915]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "5.1"]
  y-axis "Elo Rating" 2200 --> 2800
  line "T1: STC (8.0+0.08s)" [2244, 2314]
  line "T1: LTC (60.0+0.60s)" [2514, 2651]
  line "T1: VLTC (2m24s+1.12s)" [2647, 2747]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2915 | 49 | 128 | 49% | 2924 | 38% |
|  |  | E1 | 2915 | 37 | 232 | 52% | 2898 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2877 | 41 | 184 | 52% | 2859 | 36% |
|  |  | E1 | 2757 | 33 | 308 | 47% | 2782 | 31% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2357 | 48 | 136 | 51% | 2353 | 37% |
|  |  | E1 | 2310 | 42 | 188 | 49% | 2315 | 26% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2824 | 36 | 250 | 50% | 2827 | 31% |
|  |  | E1 | 2831 | 31 | 354 | 49% | 2850 | 29% |
|  |  | T1 | 2747 | 31 | 322 | 51% | 2736 | 37% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2762 | 37 | 256 | 46% | 2803 | 26% |
|  |  | E1 | 2699 | 32 | 310 | 48% | 2714 | 34% |
|  |  | T1 | 2651 | 31 | 338 | 52% | 2631 | 30% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2276 | 36 | 268 | 49% | 2280 | 27% |
|  |  | T1 | 2314 | 37 | 236 | 50% | 2310 | 34% |
|  |  | P1 | 2361 | 40 | 214 | 49% | 2376 | 24% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2647 | 34 | 298 | 48% | 2668 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2514 | 37 | 246 | 50% | 2480 | 29% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2244 | 32 | 336 | 50% | 2229 | 28% |