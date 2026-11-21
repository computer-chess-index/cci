# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2801<sub>(-19) | 3150<sub>(-6) | 3263<sub>(-8) |  |
| 0.4.1 | 2026-11-01 | 2820 | 3156 | 3271 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2861<sub>(+60) | 3214<sub>(+46) | 3258<sub>(+33) |  |
| 0.4.1 | 2026-11-01 | 2801 | 3168 | 3225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2801 | 3168 | 3225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.7" target="_blank">Submit new version</a>

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

Generated: 2026-11-21 05:35:51

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2800 --> 3300
  line "E1: STC (8.0+0.08s)" [2820, 2801]
  line "E1: LTC (60.0+0.60s)" [3156, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3271, 3263]
  line "P1: STC (8.0+0.08s)" [2801, 2861]
  line "P1: LTC (60.0+0.60s)" [3168, 3214]
  line "P1: VLTC (2m24s+1.12s)" [3225, 3258]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3258 | 49 | 114 | 50% | 3262 | 55% |
|  |  | E1 | 3263 | 33 | 248 | 49% | 3275 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3214 | 48 | 116 | 52% | 3201 | 55% |
|  |  | E1 | 3150 | 41 | 176 | 50% | 3152 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2861 | 43 | 160 | 53% | 2834 | 45% |
|  |  | E1 | 2801 | 37 | 226 | 46% | 2840 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3225 | 34 | 240 | 51% | 3202 | 57% |
|  |  | E1 | 3271 | 32 | 270 | 51% | 3254 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3168 | 34 | 252 | 52% | 3120 | 53% |
|  |  | E1 | 3156 | 29 | 358 | 56% | 3083 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2820 | 30 | 384 | 57% | 2719 | 33% |
|  |  | P1 | 2801 | 37 | 232 | 52% | 2754 | 39% |