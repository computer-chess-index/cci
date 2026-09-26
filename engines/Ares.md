# Engine: Ares

Author: Charles Roberson

Home: 

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.5 | 2024-02-06 | 1974<sub>(+262) | 2327<sub>(+247) | 2450<sub>(+129) |  |
| 1.004 | 2009-10-31 | 1712 | 2080 | 2321 |  |
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

Generated: 2026-09-26 04:35:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.004", "2.5"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1712, 1974]
  line "STC (8.0+0.08s)" [1712, 1974]
  line "LTC (60.0+0.60s)" [2080, 2327]
  line "" [2321, 2450]
  line "VLTC (2m24s+1.12s)" [2321, 2450]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5 | VLTC <sub>(2m24s+1.12s)</sub> | 2450 | 28 | 450 | 50% | 2450 | 26% |
| 2.5 | LTC <sub>(60.0+0.60s)</sub> | 2327 | 24 | 584 | 52% | 2310 | 24% |
| 2.5 | STC <sub>(8.0+0.08s)</sub> | 1974 | 22 | 766 | 51% | 1960 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.004 | VLTC <sub>(2m24s+1.12s)</sub> | 2321 | 45 | 176 | 47% | 2387 | 27% |
| 1.004 | LTC <sub>(60.0+0.60s)</sub> | 2080 | 79 | 60 | 49% | 2095 | 15% |
| 1.004 | STC <sub>(8.0+0.08s)</sub> | 1712 | 50 | 184 | 33% | 2009 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |