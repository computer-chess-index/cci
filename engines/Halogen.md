# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3340<sub>(+31) | 3580<sub>(+62) | 3626<sub>(+90) |  |
| 15.0.0 | 2025-09-01 | 3309 | 3518 | 3536 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3359<sub>(+77) | 3549<sub>(+54) | 3579<sub>(+70) |  |
| 15.0.0 | 2025-09-01 | 3282 | 3495 | 3509 |  |
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

Generated: 2026-11-28 05:39:01

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3309, 3340]
  line "E1: LTC (60.0+0.60s)" [3518, 3580]
  line "E1: VLTC (2m24s+1.12s)" [3536, 3626]
  line "P1: STC (8.0+0.08s)" [3282, 3359]
  line "P1: LTC (60.0+0.60s)" [3495, 3549]
  line "P1: VLTC (2m24s+1.12s)" [3509, 3579]
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
|  |  | P1 | 3579 | 32 | 260 | 61% | 3429 | 73% |
|  |  | E1 | 3626 | 26 | 376 | 59% | 3507 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3536 | 20 | 556 | 50% | 3537 | 86% |
|  |  | P1 | 3549 | 38 | 172 | 56% | 3453 | 77% |
|  |  | E1 | 3580 | 30 | 306 | 56% | 3475 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3374 | 20 | 642 | 50% | 3376 | 75% |
|  |  | P1 | 3359 | 30 | 268 | 49% | 3364 | 73% |
|  |  | E1 | 3340 | 24 | 468 | 47% | 3362 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 27 | 324 | 52% | 3521 | 83% |
|  |  | P1 | 3509 | 87 | 38 | 67% | 3322 | 61% |
|  |  | E1 | 3536 | 56 | 81 | 57% | 3464 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3483 | 30 | 276 | 52% | 3464 | 79% |
|  |  | P1 | 3495 | 81 | 48 | 70% | 3233 | 52% |
|  |  | E1 | 3518 | 49 | 116 | 59% | 3310 | 65% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 32 | 256 | 54% | 3259 | 64% |
|  |  | P1 | 3282 | 63 | 68 | 53% | 3240 | 59% |
|  |  | E1 | 3309 | 47 | 136 | 56% | 3179 | 54% |