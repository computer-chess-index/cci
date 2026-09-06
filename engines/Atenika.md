# Engine: Atenika

Author: Yevhenii Sekhin

Home: https://github.com/LesterEvSe/AteNika

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.5.0 | 2026-09-02 | 2082<sub>(+185) | 2317<sub>(+189) | 2349<sub>(+126) |  |
| 0.4.0 | 2026-08-30 | 1897 | 2128 | 2223 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Atenika+<version>&body=###%20Engine%20name%0AAtenika%0A%0A###%20Version%0A0.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:29

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.5.0"]
  y-axis "Elo Rating" 1800 --> 2400
  line "" [1897, 2082]
  line "STC (8.0+0.08s)" [1897, 2082]
  line "LTC (60.0+0.60s)" [2128, 2317]
  line "" [2223, 2349]
  line "VLTC (2m24s+1.12s)" [2223, 2349]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2349 | 38 | 234 | 50% | 2350 | 26% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2317 | 46 | 166 | 53% | 2291 | 21% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 2082 | 47 | 158 | 52% | 2064 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2223 | 38 | 248 | 48% | 2245 | 23% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2128 | 40 | 230 | 50% | 2133 | 15% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1897 | 38 | 248 | 50% | 1895 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |