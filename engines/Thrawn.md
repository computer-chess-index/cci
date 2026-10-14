# Engine: Thrawn

Author: Feiyu Lin

Home: https://github.com/feftywacky/Thrawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 2898 | 3294 | 3368 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3197 | 3497 | 3549 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2 | 2026-09-04 | 3040<sub>(+144) | 3351<sub>(+149) | 3407<sub>(+128) |  |
| 3.1 | 2026-07-07 | 2896<sub>(+660) | 3202<sub>(+555) | 3279<sub>(+472) |  |
| 3.0 | 2026-05-25 | 2236<sub>(-240) | 2647<sub>(-192) | 2807<sub>(-102) |  |
| 2.2 | 2025-10-08 | 2476 | 2839 | 2909 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Thrawn+<version>&body=###%20Engine%20name%0AThrawn%0A%0A###%20Version%0A3.2" target="_blank">Submit new version</a>

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

Generated: 2026-10-14 04:44:06

## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2", "3.0", "3.1", "3.2"]
  y-axis "Elo Rating" 2200 --> 3500
  line "T1: STC (8.0+0.08s)" [2476, 2236, 2896, 3040]
  line "T1: LTC (60.0+0.60s)" [2839, 2647, 3202, 3351]
  line "T1: VLTC (2m24s+1.12s)" [2909, 2807, 3279, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3407 | 33 | 222 | 50% | 3403 | 80% |
|  |  | P1 | 3549 | 38 | 162 | 51% | 3541 | 80% |
|  |  | E1 | 3368 | 30 | 274 | 48% | 3380 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3351 | 32 | 240 | 51% | 3345 | 71% |
|  |  | P1 | 3497 | 32 | 252 | 49% | 3505 | 71% |
|  |  | E1 | 3294 | 31 | 248 | 49% | 3302 | 76% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3040 | 31 | 308 | 53% | 3016 | 47% |
|  |  | P1 | 3197 | 36 | 214 | 54% | 3164 | 52% |
|  |  | E1 | 2898 | 31 | 312 | 45% | 2942 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3279 | 27 | 350 | 53% | 3249 | 67% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3202 | 27 | 360 | 53% | 3177 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2896 | 29 | 364 | 50% | 2893 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2807 | 44 | 162 | 47% | 2831 | 35% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2647 | 45 | 156 | 49% | 2655 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2236 | 52 | 124 | 48% | 2257 | 29% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2909 | 24 | 510 | 47% | 2936 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2839 | 27 | 434 | 50% | 2840 | 39% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2476 | 25 | 540 | 48% | 2498 | 29% |