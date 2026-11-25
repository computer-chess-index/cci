# Engine: Crustik

Author: Dejon Eltahan

Home: https://github.com/Dejon51/Crustik

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3058<sub>(+436) | 3325<sub>(+395) | 3379<sub>(+370) |  |
| 0.3.0 | 2026-08-27 | 2622 | 2930 | 3009 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-11-16 | 3066<sub>(+456) | 3298<sub>(+382) | 3356<sub>(+390) |  |
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

Generated: 2026-11-25 05:37:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.3.0", "0.5.0"]
  y-axis "Elo Rating" 2600 --> 3400
  line "E1: STC (8.0+0.08s)" [2622, 3058]
  line "E1: LTC (60.0+0.60s)" [2930, 3325]
  line "E1: VLTC (2m24s+1.12s)" [3009, 3379]
  line "P1: STC (8.0+0.08s)" [2610, 3066]
  line "P1: LTC (60.0+0.60s)" [2916, 3298]
  line "P1: VLTC (2m24s+1.12s)" [2966, 3356]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3356 | 39 | 164 | 53% | 3330 | 69% |
|  |  | E1 | 3379 | 35 | 208 | 52% | 3359 | 68% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3298 | 43 | 146 | 51% | 3285 | 61% |
|  |  | E1 | 3325 | 33 | 240 | 51% | 3320 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3066 | 42 | 156 | 51% | 3056 | 52% |
|  |  | E1 | 3058 | 36 | 228 | 52% | 3044 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3004 | 33 | 282 | 51% | 3000 | 43% |
|  |  | P1 | 2966 | 35 | 242 | 50% | 2961 | 46% |
|  |  | E1 | 3009 | 27 | 428 | 49% | 3015 | 46% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2928 | 33 | 270 | 51% | 2916 | 46% |
|  |  | P1 | 2916 | 35 | 242 | 50% | 2912 | 41% |
|  |  | E1 | 2930 | 28 | 398 | 48% | 2944 | 41% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2655 | 34 | 272 | 50% | 2651 | 38% |
|  |  | P1 | 2610 | 31 | 330 | 51% | 2606 | 39% |
|  |  | E1 | 2622 | 29 | 370 | 48% | 2643 | 35% |