# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2809<sub>(-13) | 3143<sub>(-12) | 3264<sub>(-6) |  |
| 0.4.1 | 2026-11-01 | 2822 | 3155 | 3270 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2854<sub>(+62) | 3201<sub>(+39) | 3254<sub>(+40) |  |
| 0.4.1 | 2026-11-01 | 2792 | 3162 | 3214 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2792 | 3162 | 3214 |  |
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

Generated: 2026-11-19 05:35:49

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2822, 2809]
  line "E1: LTC (60.0+0.60s)" [3155, 3143]
  line "E1: VLTC (2m24s+1.12s)" [3270, 3264]
  line "P1: STC (8.0+0.08s)" [2792, 2854]
  line "P1: LTC (60.0+0.60s)" [3162, 3201]
  line "P1: VLTC (2m24s+1.12s)" [3214, 3254]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3254 | 54 | 90 | 50% | 3254 | 60% |
|  |  | E1 | 3264 | 35 | 232 | 50% | 3274 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3201 | 49 | 112 | 52% | 3189 | 55% |
|  |  | E1 | 3143 | 43 | 156 | 49% | 3154 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2809 | 41 | 186 | 45% | 2847 | 39% |
|  |  | P1 | 2854 | 50 | 120 | 55% | 2815 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3214 | 34 | 240 | 51% | 3193 | 57% |
|  |  | E1 | 3270 | 32 | 270 | 51% | 3252 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3162 | 35 | 240 | 53% | 3106 | 53% |
|  |  | E1 | 3155 | 29 | 358 | 56% | 3083 | 54% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2792 | 38 | 224 | 52% | 2743 | 38% |
|  |  | E1 | 2822 | 30 | 384 | 57% | 2719 | 33% |