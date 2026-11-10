# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 2942<sub>(+350) | 3248<sub>(+277) | 3340<sub>(+207) |  |
| 1.3.0 | 2026-08-28 | 2592 | 2971 | 3133 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-10-15 | 3056<sub>(+299) | 3355<sub>(+251) | 3471<sub>(+298) |  |
| 1.3.0 | 2026-08-28 | 2757 | 3104 | 3173 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.1 | 2026-09-18 | 2842<sub>(+207) | 3179<sub>(+206) | 3249<sub>(+199) |  |
| 1.3.0 | 2026-08-28 | 2635<sub>(+281) | 2973<sub>(+177) | 3050<sub>(+177) |  |
| 1.1.2 | 2026-07-08 | 2354 | 2796 | 2873 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-10 05:38:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.0", "1.4.0"]
  y-axis "Elo Rating" 2500 --> 3500
  line "E1: STC (8.0+0.08s)" [2592, 2942]
  line "E1: LTC (60.0+0.60s)" [2971, 3248]
  line "E1: VLTC (2m24s+1.12s)" [3133, 3340]
  line "P1: STC (8.0+0.08s)" [2757, 3056]
  line "P1: LTC (60.0+0.60s)" [3104, 3355]
  line "P1: VLTC (2m24s+1.12s)" [3173, 3471]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0", "1.3.1"]
  y-axis "Elo Rating" 2300 --> 3300
  line "T1: STC (8.0+0.08s)" [2354, 2635, 2842]
  line "T1: LTC (60.0+0.60s)" [2796, 2973, 3179]
  line "T1: VLTC (2m24s+1.12s)" [2873, 3050, 3249]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3471 | 35 | 208 | 49% | 3472 | 64% |
|  |  | E1 | 3340 | 29 | 310 | 50% | 3337 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3355 | 33 | 248 | 50% | 3356 | 62% |
|  |  | E1 | 3248 | 28 | 350 | 51% | 3236 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3056 | 40 | 186 | 51% | 3039 | 40% |
|  |  | E1 | 2942 | 29 | 360 | 50% | 2934 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3249 | 62 | 68 | 51% | 3235 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3179 | 50 | 112 | 54% | 3143 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2842 | 56 | 96 | 54% | 2807 | 42% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3050 | 33 | 256 | 51% | 3042 | 53% |
|  |  | P1 | 3173 | 36 | 222 | 49% | 3182 | 49% |
|  |  | E1 | 3133 | 33 | 264 | 49% | 3144 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2973 | 32 | 296 | 53% | 2946 | 45% |
|  |  | P1 | 3104 | 37 | 220 | 52% | 3083 | 45% |
|  |  | E1 | 2971 | 32 | 298 | 46% | 3009 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2635 | 35 | 264 | 52% | 2619 | 33% |
|  |  | P1 | 2757 | 35 | 254 | 48% | 2782 | 37% |
|  |  | E1 | 2592 | 34 | 280 | 43% | 2668 | 34% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2873 | 31 | 330 | 50% | 2867 | 41% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2796 | 31 | 332 | 51% | 2773 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2354 | 33 | 316 | 49% | 2358 | 25% |