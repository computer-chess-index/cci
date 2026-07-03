# Engine: Askaig

Author: Nguyen Van Thang

Home: https://github.com/sophiathedev/askaig

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 20260628 | 2026-06-28 | 2408<sub>(+9) | 2662<sub>(+19) | 2696<sub>(-39) |  |
| 20260616 | 2026-06-16 | 2399<sub>(+new) | 2643<sub>(+new) | 2735<sub>(+new) |  |
| 20260615 | 2026-06-15 |  |  |  |  |
| 20260614 | 2026-06-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Askaig+<version>&body=###%20Engine%20name%0AAskaig%0A%0A###%20Version%0A20260628" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-03 06:22:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20260616", "20260628"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2399, 2408]
  line "STC (8.0+0.08s)" [2399, 2408]
  line "LTC (60.0+0.60s)" [2643, 2662]
  line "VLTC (2m24s+1.12s)" [2735, 2696]
  line "VLTC (2m24s+1.12s)" [2735, 2696]
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
  x-axis ["20260616", "20260628"]
  y-axis "Elo Rating" 2300 --> 2800
  line "STC (8.0+0.08s)" [2399, 2408]
  line "STC (8.0+0.08s)" [2399, 2408]
  line "LTC (60.0+0.60s)" [2643, 2662]
  line "VLTC (2m24s+1.12s)" [2735, 2696]
  line "VLTC (2m24s+1.12s)" [2735, 2696]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260628 | VLTC <sub>(2m24s+1.12s)</sub> | 2696 | 61 | 80 | 51% | 2692 | 44% |
| 20260628 | LTC <sub>(60.0+0.60s)</sub> | 2662 | 53 | 116 | 49% | 2672 | 31% |
| 20260628 | STC <sub>(8.0+0.08s)</sub> | 2408 | 58 | 96 | 52% | 2394 | 32% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20260616 | VLTC <sub>(2m24s+1.12s)</sub> | 2735 | 47 | 144 | 51% | 2724 | 36% |
| 20260616 | LTC <sub>(60.0+0.60s)</sub> | 2643 | 47 | 148 | 46% | 2677 | 34% |
| 20260616 | STC <sub>(8.0+0.08s)</sub> | 2399 | 41 | 196 | 44% | 2458 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |