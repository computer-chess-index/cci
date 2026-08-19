# Engine: Scoria

Author: Ian Nathan Kusmiantoro

Home: https://github.com/iannathan-k/scoria

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4.7 | 2026-08-10 | 2317<sub>(+1070) | 2507<sub>(+986) | 2666<sub>(+1020) |  |
| 3.8.51 | 2025-08-10 | 1247 | 1521 | 1646 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Scoria+<version>&body=###%20Engine%20name%0AScoria%0A%0A###%20Version%0A4.4.7" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-19 06:29:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.8.51", "4.4.7"]
  y-axis "Elo Rating" 1200 --> 2700
  line "STC (8.0+0.08s)" [1247, 2317]
  line "STC (8.0+0.08s)" [1247, 2317]
  line "LTC (60.0+0.60s)" [1521, 2507]
  line "VLTC (2m24s+1.12s)" [1646, 2666]
  line "VLTC (2m24s+1.12s)" [1646, 2666]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4.7 | VLTC <sub>(2m24s+1.12s)</sub> | 2666 | 39 | 224 | 51% | 2631 | 32% |
| 4.4.7 | LTC <sub>(60.0+0.60s)</sub> | 2507 | 40 | 220 | 57% | 2415 | 30% |
| 4.4.7 | STC <sub>(8.0+0.08s)</sub> | 2317 | 40 | 212 | 55% | 2233 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.8.51 | VLTC <sub>(2m24s+1.12s)</sub> | 1646 | 24 | 554 | 45% | 1715 | 42% |
| 3.8.51 | LTC <sub>(60.0+0.60s)</sub> | 1521 | 26 | 498 | 49% | 1558 | 38% |
| 3.8.51 | STC <sub>(8.0+0.08s)</sub> | 1247 | 25 | 576 | 54% | 1187 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |