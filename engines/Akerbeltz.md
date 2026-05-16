# Engine: Akerbeltz

Author: Julen Aristondo

Home: https://github.com/neluj/Akerbeltz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-04-14 | 1989<sub>(+592) | 2260<sub>(+601) | 2334<sub>(+534) |  |
| 1.0.0 | 2025-12-31 | 1397 | 1659 | 1800 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Akerbeltz+<version>&body=###%20Engine%20name%0AAkerbeltz%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-16 06:22:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0"]
  y-axis "Elo Rating" 1300 --> 2400
  line "STC (8.0+0.08s)" [1397, 1989]
  line "STC (8.0+0.08s)" [1397, 1989]
  line "LTC (60.0+0.60s)" [1659, 2260]
  line "VLTC (2m24s+1.12s)" [1800, 2334]
  line "VLTC (2m24s+1.12s)" [1800, 2334]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2334 | 31 | 396 | 49% | 2358 | 20% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2260 | 32 | 360 | 49% | 2275 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1989 | 29 | 424 | 48% | 2013 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1800 | 41 | 230 | 41% | 1935 | 22% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1659 | 48 | 164 | 43% | 1754 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1397 | 45 | 184 | 40% | 1523 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |