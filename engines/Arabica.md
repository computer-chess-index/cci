# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2823<sub>(+1) | 3150<sub>(-8) | 3254<sub>(-17) |  |
| 0.4.1 | 2026-11-01 | 2822 | 3158 | 3271 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2850<sub>(+58) | 3194<sub>(+31) | 3256<sub>(+39) |  |
| 0.4.1 | 2026-11-01 | 2792 | 3163 | 3217 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2792 | 3163 | 3217 |  |
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

Generated: 2026-11-18 05:35:53

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2822, 2823]
  line "E1: LTC (60.0+0.60s)" [3158, 3150]
  line "E1: VLTC (2m24s+1.12s)" [3271, 3254]
  line "P1: STC (8.0+0.08s)" [2792, 2850]
  line "P1: LTC (60.0+0.60s)" [3163, 3194]
  line "P1: VLTC (2m24s+1.12s)" [3217, 3256]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3256 | 57 | 82 | 50% | 3256 | 59% |
|  |  | E1 | 3254 | 48 | 116 | 48% | 3274 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3194 | 53 | 98 | 51% | 3190 | 54% |
|  |  | E1 | 3150 | 45 | 140 | 49% | 3156 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2850 | 55 | 100 | 55% | 2807 | 42% |
|  |  | E1 | 2823 | 45 | 156 | 46% | 2855 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3271 | 32 | 270 | 51% | 3254 | 56% |
|  |  | P1 | 3217 | 34 | 240 | 51% | 3195 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3158 | 29 | 358 | 56% | 3085 | 54% |
|  |  | P1 | 3163 | 35 | 240 | 53% | 3109 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2822 | 30 | 384 | 57% | 2720 | 33% |
|  |  | P1 | 2792 | 38 | 224 | 52% | 2743 | 38% |