# Engine: Cheng4

Author: Martin Sedlak

Home: https://github.com/kmar/cheng4_releases

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2962<sub>(-15) | 3252<sub>(+16) | 3340<sub>(+57) |  |
| 4.48 | 2026-07-12 | 2977 | 3236 | 3283 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2948<sub>(+95) | 3179<sub>(-92) | 3290<sub>(+47) |  |
| 4.48 | 2026-07-12 | 2853 | 3271 | 3243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.49 | 2026-09-03 | 2977<sub>(-12) | 3248<sub>(+1) | 3310<sub>(+24) |  |
| 4.48 | 2026-07-12 | 2989 | 3247 | 3286 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Cheng4+<version>&body=###%20Engine%20name%0ACheng4%0A%0A###%20Version%0A4.49" target="_blank">Submit new version</a>

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

Generated: 2026-11-17 05:37:10

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2977, 2962]
  line "E1: LTC (60.0+0.60s)" [3236, 3252]
  line "E1: VLTC (2m24s+1.12s)" [3283, 3340]
  line "P1: STC (8.0+0.08s)" [2853, 2948]
  line "P1: LTC (60.0+0.60s)" [3271, 3179]
  line "P1: VLTC (2m24s+1.12s)" [3243, 3290]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.48", "4.49"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2989, 2977]
  line "T1: LTC (60.0+0.60s)" [3247, 3248]
  line "T1: VLTC (2m24s+1.12s)" [3286, 3310]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.49 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3290 | 29 | 310 | 51% | 3283 | 67% |
|  |  | E1 | 3340 | 27 | 382 | 49% | 3349 | 60% |
|  |  | T1 | 3310 | 34 | 228 | 51% | 3305 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3179 | 30 | 316 | 49% | 3190 | 53% |
|  |  | E1 | 3252 | 25 | 430 | 48% | 3267 | 57% |
|  |  | T1 | 3248 | 32 | 264 | 50% | 3247 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2948 | 35 | 250 | 49% | 2955 | 45% |
|  |  | E1 | 2962 | 26 | 460 | 48% | 2988 | 44% |
|  |  | T1 | 2977 | 34 | 250 | 49% | 2986 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.48 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3286 | 25 | 432 | 53% | 3252 | 61% |
|  |  | P1 | 3243 | 75 | 46 | 54% | 3200 | 65% |
|  |  | E1 | 3283 | 58 | 96 | 62% | 3065 | 45% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3247 | 29 | 320 | 52% | 3210 | 58% |
|  |  | P1 | 3271 | 81 | 48 | 60% | 3143 | 42% |
|  |  | E1 | 3236 | 55 | 96 | 55% | 3186 | 52% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2989 | 29 | 370 | 54% | 2942 | 41% |
|  |  | P1 | 2853 | 73 | 68 | 59% | 2589 | 32% |
|  |  | E1 | 2977 | 63 | 92 | 60% | 2736 | 30% |