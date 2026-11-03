# Engine: Luminex

Author: Cheng Chang

Home: https://github.com/changcheng967/Luminex

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 1978<sub>(+139) | 2242<sub>(+39) | 2360<sub>(-38) |  |
| 6.1.0 | 2026-09-24 | 1839 | 2203 | 2398 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3.0 | 2026-10-27 | 1994<sub>(+105) | 2307<sub>(+39) | 2415<sub>(+7) |  |
| 6.1.0 | 2026-09-24 | 1889 | 2268 | 2408 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1.0 | 2026-09-24 | 1889 | 2268 | 2408 |  |
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

Generated: 2026-11-03 05:39:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.1.0", "6.3.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "E1: STC (8.0+0.08s)" [1839, 1978]
  line "E1: LTC (60.0+0.60s)" [2203, 2242]
  line "E1: VLTC (2m24s+1.12s)" [2398, 2360]
  line "P1: STC (8.0+0.08s)" [1889, 1994]
  line "P1: LTC (60.0+0.60s)" [2268, 2307]
  line "P1: VLTC (2m24s+1.12s)" [2408, 2415]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2415 | 54 | 116 | 54% | 2377 | 24% |
|  |  | E1 | 2360 | 45 | 172 | 53% | 2330 | 20% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2307 | 50 | 144 | 53% | 2273 | 17% |
|  |  | E1 | 2242 | 46 | 172 | 51% | 2228 | 16% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1994 | 46 | 168 | 47% | 2024 | 21% |
|  |  | E1 | 1978 | 45 | 184 | 52% | 1955 | 14% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 6.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2408 | 63 | 80 | 50% | 2407 | 30% |
|  |  | E1 | 2398 | 44 | 182 | 49% | 2410 | 22% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2203 | 43 | 200 | 52% | 2172 | 16% |
|  |  | P1 | 2268 | 48 | 164 | 55% | 2206 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 1839 | 40 | 250 | 55% | 1740 | 17% |
|  |  | P1 | 1889 | 44 | 212 | 59% | 1756 | 18% |