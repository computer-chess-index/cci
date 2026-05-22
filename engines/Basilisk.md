# Engine: Basilisk

Author: Miloslav Macůrek

Home: https://github.com/maelic13/basilisk

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-21 | 1982<sub>(+new) | 2340<sub>(+new) | 2460<sub>(+new) |  |
| 1.1.0 | 2026-05-21 |  |  |  |  |
| 1.0.0 | 2026-05-20 | 2034 | 2346 | 2457 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Basilisk+<version>&body=###%20Engine%20name%0ABasilisk%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-22 14:52:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.2.0"]
  y-axis "Elo Rating" 1900 --> 2500
  line "STC (8.0+0.08s)" [2034, 1982]
  line "STC (8.0+0.08s)" [2034, 1982]
  line "LTC (60.0+0.60s)" [2346, 2340]
  line "VLTC (2m24s+1.12s)" [2457, 2460]
  line "VLTC (2m24s+1.12s)" [2457, 2460]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2460 | 55 | 110 | 52% | 2442 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2340 | 66 | 76 | 48% | 2357 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1982 | 75 | 68 | 49% | 1998 | 12% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2457 | 48 | 154 | 49% | 2464 | 19% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2346 | 45 | 180 | 56% | 2264 | 21% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2034 | 50 | 152 | 57% | 1947 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |