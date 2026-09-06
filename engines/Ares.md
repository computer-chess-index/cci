# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1971<sub>(+263) | 2323<sub>(+245) | 2445<sub>(+128) |  |
| 1.004 | 2009-10-31 | 1708 | 2078 | 2317 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ares+<version>&body=###%20Engine%20name%0AAres%0A%0A###%20Version%0A2.5" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:18

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1708, 1971]
  line "STC (8.0+0.08s)" [1708, 1971]
  line "LTC (60.0+0.60s)" [2078, 2323]
  line "" [2317, 2445]
  line "VLTC (2m24s+1.12s)" [2317, 2445]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2445 | 28 | 442 | 50% | 2446 | 26% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2323 | 24 | 584 | 52% | 2306 | 24% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1971 | 22 | 758 | 51% | 1958 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | 2317 | 45 | 176 | 47% | 2383 | 27% |
| 1.004 | LTC <sub>(60.0+0.60s)</sub> | 2078 | 79 | 60 | 49% | 2091 | 15% |
| 1.004 | STC <sub>(8.0+0.08s)</sub> | 1708 | 50 | 184 | 33% | 2005 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |