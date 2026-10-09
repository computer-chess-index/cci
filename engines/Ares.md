# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1859 | 2137 | 2358 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 2022 | 2375 | 2533 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1974<sub>(+261) | 2331<sub>(+249) | 2454<sub>(+132) |  |
| 1.004 | 2009-10-31 | 1713 | 2082 | 2322 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ares+<version>&body=###%20Engine%20name%0AAres%0A%0A###%20Version%0A2.5" target="_blank">Submit new version</a>

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

Generated: 2026-10-09 14:08:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1713, 1974]
  line "STC (8.0+0.08s)" [1713, 1974]
  line "LTC (60.0+0.60s)" [2082, 2331]
  line "" [2322, 2454]
  line "VLTC (2m24s+1.12s)" [2322, 2454]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2454 | 27 | 458 | 50% | 2452 | 26% |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2533 | 46 | 162 | 48% | 2543 | 28% |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2358 | 42 | 202 | 50% | 2369 | 29% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2375 | 47 | 158 | 54% | 2353 | 27% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2137 | 45 | 184 | 48% | 2164 | 23% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2331 | 24 | 588 | 52% | 2311 | 24% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 2022 | 51 | 140 | 52% | 1995 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1859 | 42 | 210 | 50% | 1885 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1974 | 22 | 770 | 51% | 1963 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | 2322 | 45 | 176 | 47% | 2388 | 27% |
| 1.004 | LTC <sub>(60.0+0.60s)</sub> | 2082 | 79 | 60 | 49% | 2097 | 15% |
| 1.004 | STC <sub>(8.0+0.08s)</sub> | 1713 | 50 | 184 | 33% | 2012 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |