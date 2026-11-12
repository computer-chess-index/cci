# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3395<sub>(+934) | 3637<sub>(+1165) | 3683<sub>(+907) |  |
| 15.0.0 | 2025-09-01 | 2461 | 2472 | 2776 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3551<sub>(+750) | 3735<sub>(+772) | 3768<sub>(+940) |  |
| 15.0.0 | 2025-09-01 | 2801 | 2963 | 2828 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3374<sub>(+76) | 3536<sub>(+53) | 3563<sub>(+25) |  |
| 15.0.0 | 2025-09-01 | 3298 | 3483 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Halogen+<version>&body=###%20Engine%20name%0AHalogen%0A%0A###%20Version%0A16.0.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:38:36

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 2400 --> 3800
  line "E1: STC (8.0+0.08s)" [2461, 3395]
  line "E1: LTC (60.0+0.60s)" [2472, 3637]
  line "E1: VLTC (2m24s+1.12s)" [2776, 3683]
  line "P1: STC (8.0+0.08s)" [2801, 3551]
  line "P1: LTC (60.0+0.60s)" [2963, 3735]
  line "P1: VLTC (2m24s+1.12s)" [2828, 3768]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3600
  line "T1: STC (8.0+0.08s)" [3298, 3374]
  line "T1: LTC (60.0+0.60s)" [3483, 3536]
  line "T1: VLTC (2m24s+1.12s)" [3538, 3563]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3563 | 21 | 538 | 50% | 3563 | 87% |
|  |  | P1 | 3768 | 33 | 252 | 61% | 3606 | 72% |
|  |  | E1 | 3683 | 28 | 332 | 60% | 3549 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3536 | 20 | 556 | 50% | 3537 | 86% |
|  |  | P1 | 3735 | 39 | 164 | 57% | 3629 | 77% |
|  |  | E1 | 3637 | 32 | 266 | 57% | 3513 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3374 | 20 | 642 | 50% | 3376 | 75% |
|  |  | P1 | 3551 | 32 | 244 | 49% | 3555 | 75% |
|  |  | E1 | 3395 | 26 | 392 | 46% | 3422 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2828 | 144 | 8 | 44% | 2861 | 88% |
|  |  | E1 | 2776 | 190 | 4 | 50% | 2776 | 100% |
|  |  | T1 | 3538 | 27 | 324 | 52% | 3521 | 83% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2472 | 219 | 8 | 81% | 1945 | 38% |
|  |  | T1 | 3483 | 30 | 276 | 52% | 3464 | 79% |
|  |  | P1 | 2963 | 176 | 8 | 81% | 2745 | 38% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2461 | 189 | 8 | 75% | 2195 | 50% |
|  |  | T1 | 3298 | 32 | 256 | 54% | 3259 | 64% |
|  |  | P1 | 2801 | 198 | 4 | 38% | 2859 | 75% |