# Engine: Arabica

Author: Genio Mo

Home: https://github.com/geniomdev/arabica-chess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.7 | 2026-11-11 | 2762<sub>(-57) | 3186<sub>(+34) | 3283<sub>(+17) |  |
| 0.4.1 | 2026-11-01 | 2819 | 3152 | 3266 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2772 | 3173 | 3225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.4.1 | 2026-11-01 | 2772 | 3173 | 3225 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Arabica+<version>&body=###%20Engine%20name%0AArabica%0A%0A###%20Version%0A0.4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:35:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.1", "0.4.7"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2819, 2762]
  line "E1: LTC (60.0+0.60s)" [3152, 3186]
  line "E1: VLTC (2m24s+1.12s)" [3266, 3283]
  line "P1: STC (8.0+0.08s)" [2772]
  line "P1: LTC (60.0+0.60s)" [3173]
  line "P1: VLTC (2m24s+1.12s)" [3225]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3283 | 150 | 12 | 46% | 3317 | 42% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3186 | 139 | 12 | 50% | 3185 | 67% |
|  |  | P1 | 3214 | 169 | 8 | 56% | 3173 | 63% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2762 | 157 | 12 | 33% | 2892 | 33% |
|  |  | P1 | 2820 | 205 | 4 | 50% | 2820 | 100% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3225 | 35 | 232 | 52% | 3195 | 56% |
|  |  | E1 | 3266 | 32 | 266 | 51% | 3247 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3173 | 36 | 228 | 54% | 3104 | 54% |
|  |  | E1 | 3152 | 29 | 346 | 57% | 3077 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2772 | 40 | 208 | 53% | 2715 | 37% |
|  |  | E1 | 2819 | 30 | 372 | 57% | 2719 | 33% |