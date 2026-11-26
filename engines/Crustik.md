# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3050<sub>(+430) | 3322<sub>(+399) | 3374<sub>(+372) |  |
| 0.3.0 | 2026-08-27 | 2620 | 2923 | 3002 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3060<sub>(+450) | 3295<sub>(+379) | 3355<sub>(+389) |  |
| 0.3.0 | 2026-08-27 | 2610 | 2916 | 2966 |  |
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

Generated: 2026-11-26 05:37:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2600 --> 3400
  line "E1: STC (8.0+0.08s)" [2620, 3050]
  line "E1: LTC (60.0+0.60s)" [2923, 3322]
  line "E1: VLTC (2m24s+1.12s)" [3002, 3374]
  line "P1: STC (8.0+0.08s)" [2610, 3060]
  line "P1: LTC (60.0+0.60s)" [2916, 3295]
  line "P1: VLTC (2m24s+1.12s)" [2966, 3355]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3355 | 39 | 168 | 53% | 3329 | 70% |
|  |  | E1 | 3374 | 35 | 208 | 52% | 3355 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3295 | 42 | 150 | 51% | 3283 | 61% |
|  |  | E1 | 3322 | 33 | 244 | 51% | 3316 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3060 | 41 | 164 | 50% | 3056 | 52% |
|  |  | E1 | 3050 | 35 | 236 | 51% | 3039 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3002 | 27 | 428 | 49% | 3009 | 46% |
|  |  | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2966 | 35 | 242 | 50% | 2961 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2923 | 28 | 398 | 48% | 2938 | 41% |
|  |  | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2916 | 35 | 242 | 50% | 2912 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2610 | 31 | 330 | 51% | 2606 | 39% |
|  |  | E1 | 2620 | 29 | 374 | 48% | 2641 | 35% |