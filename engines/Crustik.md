# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3051<sub>(+427) | 3321<sub>(+396) | 3372<sub>(+368) |  |
| 0.3.0 | 2026-08-27 | 2624 | 2925 | 3004 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3066<sub>(+456) | 3297<sub>(+381) | 3356<sub>(+389) |  |
| 0.3.0 | 2026-08-27 | 2610 | 2916 | 2967 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.0 | 2026-08-27 | 2655 | 2928 | 3004 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crustik+<version>&body=###%20Engine%20name%0ACrustik%0A%0A###%20Version%0A0.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-27 05:37:47

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2600 --> 3400
  line "E1: STC (8.0+0.08s)" [2624, 3051]
  line "E1: LTC (60.0+0.60s)" [2925, 3321]
  line "E1: VLTC (2m24s+1.12s)" [3004, 3372]
  line "P1: STC (8.0+0.08s)" [2610, 3066]
  line "P1: LTC (60.0+0.60s)" [2916, 3297]
  line "P1: VLTC (2m24s+1.12s)" [2967, 3356]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3356 | 39 | 168 | 53% | 3330 | 70% |
|  |  | E1 | 3372 | 35 | 208 | 52% | 3353 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3297 | 42 | 150 | 51% | 3285 | 61% |
|  |  | E1 | 3321 | 33 | 244 | 51% | 3314 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3051 | 35 | 240 | 51% | 3040 | 49% |
|  |  | P1 | 3066 | 40 | 172 | 51% | 3060 | 53% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3004 | 27 | 428 | 49% | 3009 | 46% |
|  |  | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2967 | 35 | 242 | 50% | 2962 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2916 | 35 | 242 | 50% | 2913 | 41% |
|  |  | E1 | 2925 | 27 | 402 | 49% | 2938 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2610 | 31 | 330 | 51% | 2606 | 39% |
|  |  | E1 | 2624 | 29 | 378 | 48% | 2641 | 35% |