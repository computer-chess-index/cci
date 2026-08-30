# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1968<sub>(+262) | 2322<sub>(+247) | 2442<sub>(+127) |  |
| 1.004 | 2009-10-31 | 1706 | 2075 | 2315 |  |
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

Generated: 2026-08-30 06:22:47

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1706, 1968]
  line "STC (8.0+0.08s)" [1706, 1968]
  line "LTC (60.0+0.60s)" [2075, 2322]
  line "" [2315, 2442]
  line "VLTC (2m24s+1.12s)" [2315, 2442]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2442 | 28 | 438 | 50% | 2444 | 26% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2322 | 25 | 576 | 52% | 2304 | 25% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1968 | 22 | 738 | 51% | 1955 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | 2315 | 45 | 176 | 47% | 2381 | 27% |
| 1.004 | LTC <sub>(60.0+0.60s)</sub> | 2075 | 79 | 60 | 49% | 2090 | 15% |
| 1.004 | STC <sub>(8.0+0.08s)</sub> | 1706 | 50 | 184 | 33% | 2003 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |