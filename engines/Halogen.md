# Engine: Halogen

Author: Kieren Pearson

Home: https://github.com/KierenP/Halogen

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3341<sub>(+39) | 3584<sub>(+67) | 3629<sub>(+91) |  |
| 15.0.0 | 2025-09-01 | 3302 | 3517 | 3538 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 16.0.0 | 2026-02-10 | 3359<sub>(+80) | 3548<sub>(+53) | 3579<sub>(+73) |  |
| 15.0.0 | 2025-09-01 | 3279 | 3495 | 3506 |  |
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

Generated: 2026-11-26 05:39:03

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["15.0.0", "16.0.0"]
  y-axis "Elo Rating" 3200 --> 3700
  line "E1: STC (8.0+0.08s)" [3302, 3341]
  line "E1: LTC (60.0+0.60s)" [3517, 3584]
  line "E1: VLTC (2m24s+1.12s)" [3538, 3629]
  line "P1: STC (8.0+0.08s)" [3279, 3359]
  line "P1: LTC (60.0+0.60s)" [3495, 3548]
  line "P1: VLTC (2m24s+1.12s)" [3506, 3579]
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
| 16.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3579 | 32 | 260 | 61% | 3428 | 73% |
|  |  | E1 | 3629 | 26 | 372 | 59% | 3509 | 76% |
|  |  | T1 | 3563 | 21 | 538 | 50% | 3563 | 87% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3548 | 38 | 172 | 56% | 3452 | 77% |
|  |  | E1 | 3584 | 30 | 302 | 56% | 3478 | 69% |
|  |  | T1 | 3536 | 20 | 556 | 50% | 3537 | 86% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3359 | 31 | 256 | 49% | 3364 | 73% |
|  |  | E1 | 3341 | 24 | 452 | 47% | 3364 | 60% |
|  |  | T1 | 3374 | 20 | 642 | 50% | 3376 | 75% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 15.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3538 | 56 | 81 | 57% | 3467 | 73% |
|  |  | T1 | 3538 | 27 | 324 | 52% | 3521 | 83% |
|  |  | P1 | 3506 | 87 | 38 | 67% | 3321 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3483 | 30 | 276 | 52% | 3464 | 79% |
|  |  | P1 | 3495 | 81 | 48 | 70% | 3232 | 52% |
|  |  | E1 | 3517 | 50 | 112 | 59% | 3305 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3298 | 32 | 256 | 54% | 3259 | 64% |
|  |  | P1 | 3279 | 63 | 68 | 53% | 3239 | 59% |
|  |  | E1 | 3302 | 50 | 120 | 56% | 3163 | 53% |