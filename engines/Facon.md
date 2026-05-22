# Engine: Facon

Author: Carlos M. Canavessi

Home: https://github.com/CMCanavessi/facon

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-04-25 | 1997<sub>(+486) | 2284<sub>(+430) | 2349<sub>(+382) |  |
| 1.3 | 2026-04-11 | 1511<sub>(+new) | 1854<sub>(+new) | 1967<sub>(+new) |  |
| 1.2 | 2026-03-24 |  |  |  |  |
| 1.1 | 2026-03-11 |  |  |  |  |
| 1.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Facon+<version>&body=###%20Engine%20name%0AFacon%0A%0A###%20Version%0A1.4" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 06:24:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3", "1.4"]
  y-axis "Elo Rating" 1500 --> 2400
  line "STC (8.0+0.08s)" [1511, 1997]
  line "STC (8.0+0.08s)" [1511, 1997]
  line "LTC (60.0+0.60s)" [1854, 2284]
  line "VLTC (2m24s+1.12s)" [1967, 2349]
  line "VLTC (2m24s+1.12s)" [1967, 2349]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2349 | 30 | 390 | 52% | 2327 | 20% |
| 1.4 | LTC <sub>(60.0+0.60s)</sub> | 2284 | 32 | 368 | 53% | 2252 | 17% |
| 1.4 | STC <sub>(8.0+0.08s)</sub> | 1997 | 30 | 394 | 51% | 1979 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1967 | 34 | 324 | 48% | 1983 | 19% |
| 1.3 | LTC <sub>(60.0+0.60s)</sub> | 1854 | 32 | 364 | 50% | 1851 | 18% |
| 1.3 | STC <sub>(8.0+0.08s)</sub> | 1511 | 31 | 378 | 50% | 1505 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |