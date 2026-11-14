# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3345<sub>(+237) | 3503<sub>(+100) | 3675<sub>(+205) |  |
| 6.0 | 2024-08-10 | 3108 | 3403 | 3470 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3366<sub>(+227) | 3482<sub>(+95) | 3429<sub>(-7) |  |
| 6.0 | 2024-08-10 | 3139 | 3387 | 3436 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3386<sub>(+186) | 3532<sub>(+121) | 3559<sub>(+107) |  |
| 6.0 | 2024-08-10 | 3200 | 3411 | 3452 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:37:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3108, 3345]
  line "E1: LTC (60.0+0.60s)" [3403, 3503]
  line "E1: VLTC (2m24s+1.12s)" [3470, 3675]
  line "P1: STC (8.0+0.08s)" [3139, 3366]
  line "P1: LTC (60.0+0.60s)" [3387, 3482]
  line "P1: VLTC (2m24s+1.12s)" [3436, 3429]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3200, 3386]
  line "T1: LTC (60.0+0.60s)" [3411, 3532]
  line "T1: VLTC (2m24s+1.12s)" [3452, 3559]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3429 | 136 | 20 | 83% | 3082 | 35% |
|  |  | E1 | 3675 | 137 | 28 | 80% | 3036 | 25% |
|  |  | T1 | 3559 | 30 | 258 | 51% | 3545 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3503 | 116 | 32 | 83% | 3033 | 34% |
|  |  | T1 | 3532 | 26 | 346 | 51% | 3511 | 81% |
|  |  | P1 | 3482 | 228 | 16 | 97% | 2865 | 6% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3345 | 81 | 40 | 55% | 3283 | 65% |
|  |  | T1 | 3386 | 26 | 378 | 54% | 3339 | 70% |
|  |  | P1 | 3366 | 124 | 18 | 69% | 3213 | 50% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3470 | 25 | 386 | 50% | 3474 | 73% |
|  |  | T1 | 3452 | 32 | 244 | 49% | 3456 | 76% |
|  |  | P1 | 3436 | 35 | 196 | 49% | 3443 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3403 | 25 | 382 | 49% | 3416 | 74% |
|  |  | T1 | 3411 | 30 | 286 | 50% | 3411 | 71% |
|  |  | P1 | 3387 | 32 | 242 | 49% | 3394 | 75% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3200 | 32 | 268 | 48% | 3213 | 61% |
|  |  | P1 | 3139 | 31 | 280 | 49% | 3147 | 62% |
|  |  | E1 | 3108 | 25 | 452 | 44% | 3150 | 52% |