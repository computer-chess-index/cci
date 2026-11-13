# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 2954<sub>(+231) | 3244<sub>(+117) | 3337<sub>(+127) |  |
| 1.3 | 2025-09-19 | 2723 | 3127 | 3210 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 2986<sub>(+9) | 3274<sub>(+207) | 3353<sub>(+506) |  |
| 1.3 | 2025-09-19 | 2977 | 3067 | 2847 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 3060<sub>(+141) | 3285<sub>(+65) | 3367<sub>(+70) |  |
| 1.3 | 2025-09-19 | 2919 | 3220 | 3297 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Lambergar+<version>&body=###%20Engine%20name%0ALambergar%0A%0A###%20Version%0A1.5" target="_blank">Submit new version</a>

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

Generated: 2026-11-13 05:39:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2723, 2954]
  line "E1: LTC (60.0+0.60s)" [3127, 3244]
  line "E1: VLTC (2m24s+1.12s)" [3210, 3337]
  line "P1: STC (8.0+0.08s)" [2977, 2986]
  line "P1: LTC (60.0+0.60s)" [3067, 3274]
  line "P1: VLTC (2m24s+1.12s)" [2847, 3353]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2919, 3060]
  line "T1: LTC (60.0+0.60s)" [3220, 3285]
  line "T1: VLTC (2m24s+1.12s)" [3297, 3367]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3367 | 29 | 298 | 50% | 3364 | 72% |
|  |  | P1 | 3353 | 33 | 236 | 57% | 3289 | 72% |
|  |  | E1 | 3337 | 27 | 364 | 55% | 3291 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3285 | 26 | 404 | 53% | 3262 | 61% |
|  |  | P1 | 3274 | 36 | 208 | 52% | 3221 | 64% |
|  |  | E1 | 3244 | 26 | 402 | 55% | 3174 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3060 | 27 | 392 | 50% | 3058 | 51% |
|  |  | P1 | 2986 | 36 | 220 | 50% | 2989 | 53% |
|  |  | E1 | 2954 | 29 | 354 | 47% | 2982 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3210 | 104 | 32 | 75% | 2921 | 44% |
|  |  | T1 | 3297 | 24 | 462 | 52% | 3283 | 66% |
|  |  | P1 | 2847 | 192 | 20 | 88% | 2160 | 15% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3127 | 120 | 20 | 63% | 3008 | 55% |
|  |  | T1 | 3220 | 26 | 398 | 51% | 3210 | 63% |
|  |  | P1 | 3067 | 151 | 16 | 69% | 2831 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2723 | 110 | 28 | 45% | 2772 | 32% |
|  |  | T1 | 2919 | 22 | 640 | 53% | 2877 | 42% |
|  |  | P1 | 2977 | 162 | 16 | 50% | 2984 | 25% |