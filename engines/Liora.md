# Engine: Liora

Author: Louis Simonet

Home: https://github.com/LFM57/liora-chess-engine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2070<sub>(+64) | 2431<sub>(+27) | 2539<sub>(+46) |  |
| 11.0 | 2026-10-29 | 2006 | 2404 | 2493 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2176 | 2387 | 2499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 11.13 | 2026-11-19 | 2176 | 2387 | 2499 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Liora+<version>&body=###%20Engine%20name%0ALiora%0A%0A###%20Version%0A11.13" target="_blank">Submit new version</a>

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

Generated: 2026-11-22 05:39:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["11.0", "11.13"]
  y-axis "Elo Rating" 2000 --> 2600
  line "E1: STC (8.0+0.08s)" [2006, 2070]
  line "E1: LTC (60.0+0.60s)" [2404, 2431]
  line "E1: VLTC (2m24s+1.12s)" [2493, 2539]
  line "P1: STC (8.0+0.08s)" [2176]
  line "P1: LTC (60.0+0.60s)" [2387]
  line "P1: VLTC (2m24s+1.12s)" [2499]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.13 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2539 | 40 | 224 | 52% | 2512 | 23% |
|  |  | P1 | 2499 | 66 | 76 | 55% | 2439 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2431 | 43 | 200 | 52% | 2411 | 20% |
|  |  | P1 | 2387 | 62 | 90 | 56% | 2327 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2070 | 47 | 158 | 50% | 2074 | 22% |
|  |  | P1 | 2176 | 59 | 102 | 52% | 2151 | 19% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2493 | 48 | 156 | 50% | 2491 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2404 | 44 | 196 | 44% | 2471 | 14% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2006 | 53 | 132 | 49% | 2016 | 16% |