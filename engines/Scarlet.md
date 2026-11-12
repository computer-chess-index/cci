# Engine: Scarlet

Author: Evan Guerra

Home: https://github.com/EIG520/scarlet

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 2842<sub>(+716) | 3174<sub>(+714) | 3254<sub>(+675) |  |
| 1.0 | 2026-07-26 | 2126 | 2460 | 2579 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-10-13 | 3024<sub>(+809) | 3278<sub>(+743) | 3356<sub>(+776) |  |
| 1.0 | 2026-07-26 | 2215 | 2535 | 2580 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 2026-07-26 | 2194 | 2468 | 2520 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scarlet+<version>&body=###%20Engine%20name%0AScarlet%0A%0A###%20Version%0A1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:42:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2100 --> 3400
  line "E1: STC (8.0+0.08s)" [2126, 2842]
  line "E1: LTC (60.0+0.60s)" [2460, 3174]
  line "E1: VLTC (2m24s+1.12s)" [2579, 3254]
  line "P1: STC (8.0+0.08s)" [2215, 3024]
  line "P1: LTC (60.0+0.60s)" [2535, 3278]
  line "P1: VLTC (2m24s+1.12s)" [2580, 3356]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3356 | 35 | 244 | 53% | 3313 | 50% |
|  |  | E1 | 3254 | 28 | 360 | 53% | 3222 | 51% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3278 | 39 | 208 | 54% | 3228 | 40% |
|  |  | E1 | 3174 | 30 | 340 | 52% | 3141 | 45% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3024 | 32 | 306 | 47% | 3039 | 37% |
|  |  | E1 | 2842 | 30 | 380 | 55% | 2781 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2580 | 45 | 194 | 45% | 2646 | 20% |
|  |  | E1 | 2579 | 39 | 242 | 49% | 2585 | 25% |
|  |  | T1 | 2520 | 37 | 252 | 50% | 2525 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2535 | 44 | 188 | 47% | 2579 | 22% |
|  |  | E1 | 2460 | 38 | 250 | 51% | 2435 | 25% |
|  |  | T1 | 2468 | 37 | 250 | 51% | 2437 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2215 | 44 | 184 | 49% | 2222 | 21% |
|  |  | E1 | 2126 | 36 | 280 | 47% | 2159 | 21% |
|  |  | T1 | 2194 | 39 | 244 | 50% | 2187 | 18% |