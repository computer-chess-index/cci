# Engine: Sykora

Author: Sullivan Bognar

Home: https://github.com/sb2bg/sykora

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.2.2 | 2026-03-23 |  |  |  |  |
| 0.2.1 | 2026-03-02 | 2022<sub>(+120) | 2349<sub>(+116) | 2444<sub>(+22) |  |
| 0.1.0 | 2026-02-17 | 1902 | 2233 | 2422 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Sykora+<version>&body=###%20Engine%20name%0ASykora%0A%0A###%20Version%0A0.2.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:29:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.1.0", "0.2.1"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [1902, 2022]
  line "STC (8.0+0.08s)" [1902, 2022]
  line "LTC (60.0+0.60s)" [2233, 2349]
  line "VLTC (2m24s+1.12s)" [2422, 2444]
  line "VLTC (2m24s+1.12s)" [2422, 2444]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2444 | 38 | 226 | 52% | 2422 | 33% |
| 0.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2349 | 35 | 272 | 48% | 2367 | 28% |
| 0.2.1 | STC <sub>(8.0+0.08s)</sub> | 2022 | 37 | 266 | 52% | 2003 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2422 | 126 | 28 | 21% | 2726 | 21% |
| 0.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2233 | 70 | 70 | 46% | 2265 | 27% |
| 0.1.0 | STC <sub>(8.0+0.08s)</sub> | 1902 | 97 | 40 | 41% | 2022 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |