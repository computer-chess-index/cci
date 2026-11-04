# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 1966<sub>(+127) | 2241<sub>(+36) | 2334<sub>(-64) |  |
| 6.1.0 | 2026-09-24 | 1839 | 2205 | 2398 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 2010<sub>(+97) | 2325<sub>(+33) | 2430<sub>(-4) |  |
| 6.1.0 | 2026-09-24 | 1913 | 2292 | 2434 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1913 | 2292 | 2434 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Luminex+<version>&body=###%20Engine%20name%0ALuminex%0A%0A###%20Version%0A6.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-04 05:39:59

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1839, 1966]
  line "E1: LTC (60.0+0.60s)" [2205, 2241]
  line "E1: VLTC (2m24s+1.12s)" [2398, 2334]
  line "P1: STC (8.0+0.08s)" [1913, 2010]
  line "P1: LTC (60.0+0.60s)" [2292, 2325]
  line "P1: VLTC (2m24s+1.12s)" [2434, 2430]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2334 | 39 | 236 | 50% | 2327 | 18% |
|  |  | P1 | 2430 | 50 | 140 | 53% | 2408 | 24% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2241 | 43 | 196 | 51% | 2230 | 15% |
|  |  | P1 | 2325 | 46 | 168 | 52% | 2303 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1966 | 44 | 192 | 51% | 1953 | 15% |
|  |  | P1 | 2010 | 42 | 200 | 47% | 2043 | 21% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2434 | 63 | 80 | 50% | 2433 | 30% |
|  |  | E1 | 2398 | 44 | 182 | 49% | 2410 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2292 | 48 | 164 | 55% | 2229 | 18% |
|  |  | E1 | 2205 | 43 | 200 | 52% | 2174 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1913 | 44 | 212 | 59% | 1779 | 18% |
|  |  | E1 | 1839 | 40 | 250 | 55% | 1740 | 17% |