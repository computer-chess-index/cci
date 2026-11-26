# Engine: Barbarossa

Author: Nicu Ionita

Home: https://github.com/nionita/Barbarossa

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-11-23 | 2076<sub>(-22) | 2534<sub>(+136) | 2674<sub>(+141) |  |
| 0.8.0 | 2026-10-18 | 2098 | 2398 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-11-23 | 2171<sub>(+72) | 2512<sub>(+114) | 2541<sub>(+68) |  |
| 0.8.0 | 2026-10-18 | 2099 | 2398 | 2473 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.8.0 | 2026-10-18 | 2099 | 2398 | 2473 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Barbarossa+<version>&body=###%20Engine%20name%0ABarbarossa%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:36:25

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 2000 --> 2700
  line "E1: STC (8.0+0.08s)" [2098, 2076]
  line "E1: LTC (60.0+0.60s)" [2398, 2534]
  line "E1: VLTC (2m24s+1.12s)" [2533, 2674]
  line "P1: STC (8.0+0.08s)" [2099, 2171]
  line "P1: LTC (60.0+0.60s)" [2398, 2512]
  line "P1: VLTC (2m24s+1.12s)" [2473, 2541]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2541 | 103 | 28 | 46% | 2572 | 36% |
|  |  | E1 | 2674 | 63 | 82 | 55% | 2633 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2512 | 82 | 52 | 59% | 2422 | 21% |
|  |  | E1 | 2534 | 60 | 94 | 55% | 2483 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2171 | 75 | 64 | 48% | 2184 | 16% |
|  |  | E1 | 2076 | 72 | 64 | 44% | 2134 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2533 | 38 | 304 | 65% | 2226 | 18% |
|  |  | P1 | 2473 | 52 | 144 | 61% | 2178 | 27% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2398 | 45 | 252 | 70% | 1872 | 15% |
|  |  | P1 | 2398 | 48 | 180 | 61% | 2129 | 21% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2098 | 38 | 290 | 53% | 2010 | 22% |
|  |  | P1 | 2099 | 51 | 166 | 63% | 1823 | 23% |