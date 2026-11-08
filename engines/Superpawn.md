# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3062<sub>(+209) | 3371<sub>(+185) | 3449<sub>(+194) |  |
| 1.9.0 | 2026-10-16 | 2853 | 3186 | 3255 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.1 | 2026-10-18 | 3197<sub>(+211) | 3474<sub>(+171) | 3517<sub>(+142) |  |
| 1.9.0 | 2026-10-16 | 2986 | 3303 | 3375 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2986 | 3303 | 3375 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-08 05:42:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2853, 3062]
  line "E1: LTC (60.0+0.60s)" [3186, 3371]
  line "E1: VLTC (2m24s+1.12s)" [3255, 3449]
  line "P1: STC (8.0+0.08s)" [2986, 3197]
  line "P1: LTC (60.0+0.60s)" [3303, 3474]
  line "P1: VLTC (2m24s+1.12s)" [3375, 3517]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3517 | 35 | 210 | 52% | 3506 | 62% |
|  |  | E1 | 3449 | 29 | 314 | 52% | 3437 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3474 | 35 | 216 | 50% | 3472 | 58% |
|  |  | E1 | 3371 | 32 | 264 | 52% | 3356 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3197 | 42 | 160 | 51% | 3190 | 48% |
|  |  | E1 | 3062 | 31 | 328 | 54% | 3023 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3255 | 34 | 292 | 55% | 3097 | 40% |
|  |  | P1 | 3375 | 43 | 194 | 60% | 3123 | 39% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3186 | 42 | 214 | 62% | 2893 | 34% |
|  |  | P1 | 3303 | 50 | 150 | 62% | 2967 | 32% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2853 | 42 | 220 | 61% | 2599 | 26% |
|  |  | P1 | 2986 | 47 | 176 | 58% | 2754 | 26% |