# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1847<sub>(+4) | 2155<sub>(-41) | 2294<sub>(+10) |  |
| 6.2 | 2025-09-16 | 1843<sub>(+new) | 2196<sub>(+new) | 2284<sub>(+new) |  |
| 6.1 | 2025-08-05 |  |  |  |  |
| 6.0 | 2024-10-22 |  |  |  |  |
| 5.1 | 2022-10-22 |  |  |  |  |
| 5.0 | 2022-06-24 |  |  |  |  |
| 4.0 | 2021-10-02 |  |  |  |  |
| 3.5 | 2019-06-18 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-17 06:23:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1843, 1847]
  line "STC (8.0+0.08s)" [1843, 1847]
  line "LTC (60.0+0.60s)" [2196, 2155]
  line "VLTC (2m24s+1.12s)" [2284, 2294]
  line "VLTC (2m24s+1.12s)" [2284, 2294]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1843, 1847]
  line "STC (8.0+0.08s)" [1843, 1847]
  line "LTC (60.0+0.60s)" [2196, 2155]
  line "VLTC (2m24s+1.12s)" [2284, 2294]
  line "VLTC (2m24s+1.12s)" [2284, 2294]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2294 | 33 | 312 | 50% | 2290 | 29% |
| 6.3 | LTC <sub>(60.0+0.60s)</sub> | 2155 | 36 | 278 | 49% | 2159 | 21% |
| 6.3 | STC <sub>(8.0+0.08s)</sub> | 1847 | 33 | 334 | 46% | 1883 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2284 | 27 | 468 | 49% | 2294 | 30% |
| 6.2 | LTC <sub>(60.0+0.60s)</sub> | 2196 | 27 | 452 | 50% | 2188 | 28% |
| 6.2 | STC <sub>(8.0+0.08s)</sub> | 1843 | 25 | 584 | 51% | 1832 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |