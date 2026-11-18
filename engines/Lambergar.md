# Engine: Lambergar

Author: Jabolcni Strudelj

Home: https://github.com/jabolcni/Lambergar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 2978<sub>(+124) | 3266<sub>(+52) | 3359<sub>(+43) |  |
| 1.3 | 2025-09-19 | 2854 | 3214 | 3316 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5 | 2026-05-28 | 2965<sub>(+79) | 3229<sub>(+50) | 3310<sub>(+92) |  |
| 1.3 | 2025-09-19 | 2886 | 3179 | 3218 |  |
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

Generated: 2026-11-18 05:39:56

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.5"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2854, 2978]
  line "E1: LTC (60.0+0.60s)" [3214, 3266]
  line "E1: VLTC (2m24s+1.12s)" [3316, 3359]
  line "P1: STC (8.0+0.08s)" [2886, 2965]
  line "P1: LTC (60.0+0.60s)" [3179, 3229]
  line "P1: VLTC (2m24s+1.12s)" [3218, 3310]
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
| 1.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3310 | 33 | 236 | 57% | 3247 | 72% |
|  |  | E1 | 3359 | 26 | 376 | 55% | 3312 | 68% |
|  |  | T1 | 3367 | 29 | 298 | 50% | 3364 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3266 | 25 | 422 | 55% | 3198 | 63% |
|  |  | T1 | 3285 | 26 | 404 | 53% | 3262 | 61% |
|  |  | P1 | 3229 | 36 | 212 | 52% | 3183 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2978 | 28 | 362 | 47% | 3006 | 49% |
|  |  | T1 | 3060 | 27 | 392 | 50% | 3058 | 51% |
|  |  | P1 | 2965 | 35 | 222 | 49% | 2969 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3297 | 24 | 462 | 52% | 3283 | 66% |
|  |  | P1 | 3218 | 79 | 60 | 71% | 2822 | 42% |
|  |  | E1 | 3316 | 56 | 92 | 61% | 3183 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3220 | 26 | 398 | 51% | 3210 | 63% |
|  |  | P1 | 3179 | 72 | 56 | 54% | 3113 | 54% |
|  |  | E1 | 3214 | 57 | 84 | 52% | 3183 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2919 | 22 | 640 | 53% | 2877 | 42% |
|  |  | P1 | 2886 | 75 | 60 | 41% | 2982 | 35% |
|  |  | E1 | 2854 | 60 | 88 | 51% | 2854 | 40% |