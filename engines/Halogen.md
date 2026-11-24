# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3344<sub>(+43) | 3588<sub>(+69) | 3633<sub>(+88) |  |
| 15.0.0 | 2025-09-01 | 3301 | 3519 | 3545 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3351<sub>(+85) | 3540<sub>(+49) | 3571<sub>(+89) |  |
| 15.0.0 | 2025-09-01 | 3266 | 3491 | 3482 |  |
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

Generated: 2026-11-24 05:38:55

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3301, 3344]
  line "E1: LTC (60.0+0.60s)" [3519, 3588]
  line "E1: VLTC (2m24s+1.12s)" [3545, 3633]
  line "P1: STC (8.0+0.08s)" [3266, 3351]
  line "P1: LTC (60.0+0.60s)" [3491, 3540]
  line "P1: VLTC (2m24s+1.12s)" [3482, 3571]
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
|  |  | P1 | 3571 | 32 | 260 | 61% | 3420 | 73% |
|  |  | E1 | 3633 | 27 | 368 | 59% | 3511 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3536 | 20 | 556 | 50% | 3537 | 86% |
|  |  | P1 | 3540 | 38 | 172 | 56% | 3444 | 77% |
|  |  | E1 | 3588 | 30 | 302 | 56% | 3480 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3374 | 20 | 642 | 50% | 3376 | 75% |
|  |  | P1 | 3351 | 31 | 252 | 49% | 3356 | 74% |
|  |  | E1 | 3344 | 25 | 444 | 47% | 3367 | 59% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3538 | 27 | 324 | 52% | 3521 | 83% |
|  |  | P1 | 3482 | 93 | 34 | 68% | 3290 | 59% |
|  |  | E1 | 3545 | 63 | 65 | 60% | 3452 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3491 | 86 | 44 | 73% | 3197 | 50% |
|  |  | E1 | 3519 | 54 | 96 | 60% | 3272 | 63% |
|  |  | T1 | 3483 | 30 | 276 | 52% | 3464 | 79% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3266 | 73 | 52 | 53% | 3218 | 56% |
|  |  | E1 | 3301 | 54 | 108 | 56% | 3151 | 48% |
|  |  | T1 | 3298 | 32 | 256 | 54% | 3259 | 64% |